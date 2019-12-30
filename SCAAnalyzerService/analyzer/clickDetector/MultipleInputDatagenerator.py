import numpy as np
from analyzer.clickDetector.ClickDetectorUtil import apply_region_filter


class MultipleInputDategenerator:

    def flow_from_directory(self,
                            generator,
                            before_dir,
                            after_dir,
                            batch_size,
                            img_height=584,
                            img_width=480,
                            channels=3):

        generator_before = generator.flow_from_directory(before_dir,
                                                         target_size=(img_height, img_width),
                                                         class_mode='categorical',
                                                         batch_size=batch_size,
                                                         shuffle=True,
                                                         seed=666)

        generator_after = generator.flow_from_directory(after_dir,
                                                        target_size=(img_height, img_width),
                                                        class_mode='categorical',
                                                        batch_size=batch_size,
                                                        shuffle=True,
                                                        seed=666)

        while True:
            before_images = []
            after_images = []

            generator_before_iterator = generator_before.next()
            generator_after_iterator = generator_after.next()

            for idx in range(len(generator_before_iterator[0])):
                before = np.reshape(generator_before_iterator[0][idx], (img_height, img_width, channels))
                after = np.reshape(generator_after_iterator[0][idx], (img_height, img_width, channels))
                before, after = apply_region_filter(before.copy(), after.copy())

                before = np.asarray(before)
                before = before.astype('float32')
                before /= 255.0

                after = np.asarray(before)
                after = after.astype('float32')
                after /= 255.0

                before_images.append(before)
                after_images.append(after)

            before = np.reshape(before_images, (len(generator_before_iterator[0]), img_height, img_width, channels))
            after = np.reshape(after_images, (len(generator_before_iterator[0]), img_height, img_width, channels))
            yield [before, after], generator_after_iterator[1]
