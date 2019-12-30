import analyzer.clickDetector.Model as modelHelper
from analyzer.clickDetector.MultipleInputDatagenerator import MultipleInputDategenerator
from tensorflow.keras import optimizers
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from analyzer.clickDetector.ClickDetectorUtil import count_files_in_dir


class ClickDetector:
    weights_loaded = False

    def __init__(self, channels=3, img_height=584, img_width=480, optimizer=optimizers.Adam()):
        self.model = modelHelper.create_late_fusion_model(channels, img_height, img_width)
        self.optimizer = optimizer

    def load_weights(self, weights_path):
        self.model.load_weights(weights_path)
        self.model.compile(loss='categorical_crossentropy', optimizer=self.optimizer,
                           metrics=['categorical_accuracy', 'accuracy'])
        self.weights_loaded = True

    def predict(self, before_frame, after_frame, weights_path="", optimizer=optimizers.Adam()):
        if self.weights_loaded is False:
            self.load_weights(weights_path)

        result = self.model.predict([before_frame, after_frame])
        print(result)
        if result[0][0] == 1.0:
            return True  # CLICK
        else:
            return False

    def train(self, callbacks, dataset_dir, batch_size=8, epochs=10):
        self.model.compile(loss='categorical_crossentropy', optimizer=self.optimizer,
                           metrics=['categorical_accuracy', 'accuracy'])

        imgDataGenerator = ImageDataGenerator(
            rescale=1,  # 1./255,
            rotation_range=0,
            width_shift_range=0,
            height_shift_range=0,
            shear_range=0,
            zoom_range=0,
            horizontal_flip=False,
            vertical_flip=False,
            # fill_mode='nearest'
        )

        generator = MultipleInputDategenerator()
        before_dir_train = f"{dataset_dir}/train/before"
        after_dir_train = f"{dataset_dir}/train/after"
        train_generator = generator.flow_from_directory(
            generator=imgDataGenerator,
            before_dir=before_dir_train,
            after_dir=after_dir_train,
            batch_size=batch_size
        )

        before_dir_test = f"{dataset_dir}/test/before"
        after_dir_test = f"{dataset_dir}/test/after"
        validation_generator = generator.flow_from_directory(
            generator=imgDataGenerator,
            before_dir=before_dir_test,
            after_dir=after_dir_test,
            batch_size=batch_size
        )

        nr_train_samples = count_files_in_dir(f"{before_dir_train}/click/") + \
                           count_files_in_dir(f"{before_dir_train}/no_click/")

        nr_test_samples = count_files_in_dir(f"{before_dir_test}/click/") + \
                          count_files_in_dir(f"{before_dir_test}/no_click/")

        history = self.model.fit_generator(
            train_generator,
            steps_per_epoch=nr_train_samples / batch_size,
            epochs=epochs,
            validation_data=validation_generator,
            validation_steps=nr_test_samples / batch_size,
            # use_multiprocessing=True,
            shuffle=False,
            verbose=1,
            callbacks=callbacks)

        return history

    def summary(self):
        print(self.model.summary())
