from tensorflow.keras import layers
from tensorflow.keras.models import Model

NUM_CLASSES = 2


def __create_conv_layers__(input_img, input_shape):
    model = layers.Conv2D(32, (3, 3), padding='same', input_shape=input_shape)(input_img)
    model = layers.LeakyReLU(alpha=0.1)(model)
    model = layers.MaxPooling2D(pool_size=(2, 2), padding='same')(model)
    model = layers.Dropout(0.25)(model)

    model = layers.Conv2D(64, (3, 3), padding='same')(model)
    model = layers.LeakyReLU(alpha=0.1)(model)
    model = layers.MaxPooling2D(pool_size=(2, 2), padding='same')(model)
    model = layers.Dropout(0.25)(model)

    model = layers.Conv2D(96, (3, 3), padding='same')(model)
    model = layers.LeakyReLU(alpha=0.1)(model)
    model = layers.MaxPooling2D(pool_size=(2, 2), padding='same')(model)
    model = layers.Dropout(0.25)(model)

    model = layers.Conv2D(128, (3, 3), padding='same')(model)
    model = layers.LeakyReLU(alpha=0.1)(model)
    model = layers.MaxPooling2D(pool_size=(2, 2), padding='same')(model)
    model = layers.Dropout(0.3)(model)

    model = layers.Conv2D(256, (3, 3), padding='same')(model)
    model = layers.LeakyReLU(alpha=0.1)(model)
    model = layers.MaxPooling2D(pool_size=(2, 2), padding='same')(model)
    model = layers.Dropout(0.4)(model)

    # model = layers.Conv2D(512, (3, 3), padding='same')(model)
    # model = layers.LeakyReLU(alpha=0.1)(model)
    # model = layers.MaxPooling2D(pool_size=(2, 2), padding='same')(model)
    # model = layers.Dropout(0.4)(model)

    return model


def create_late_fusion_model(channels=3, img_height=584, img_width=480):
    input_shape = (img_height, img_width, channels)

    before_input = layers.Input(shape=input_shape)
    before_model = __create_conv_layers__(before_input, input_shape)

    after_input = layers.Input(shape=input_shape)
    after_model = __create_conv_layers__(after_input, input_shape)

    conv = layers.concatenate([before_model, after_model])
    conv = layers.Flatten()(conv)

    dense = layers.Dense(512)(conv)
    dense = layers.LeakyReLU(alpha=0.1)(dense)
    dense = layers.Dropout(0.25)(dense)

    dense = layers.Dense(256)(dense)
    dense = layers.LeakyReLU(alpha=0.1)(dense)
    dense = layers.Dropout(0.25)(dense)

    dense = layers.Dense(128)(dense)
    dense = layers.LeakyReLU(alpha=0.1)(dense)
    dense = layers.Dropout(0.4)(dense)

    dense = layers.Dense(64)(dense)
    dense = layers.LeakyReLU(alpha=0.1)(dense)
    dense = layers.Dropout(0.4)(dense)

    output = layers.Dense(NUM_CLASSES, activation='softmax')(dense)

    return Model(inputs=[before_input, after_input], outputs=[output])