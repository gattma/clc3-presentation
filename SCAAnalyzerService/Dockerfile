FROM tensorflow/tensorflow:latest-py3

EXPOSE 5000

COPY . /app
WORKDIR /app

RUN mkdir ./uploads

RUN pip install -r requirements.txt
RUN apt-get update && apt-get install -y libglib2.0-0 libsm6 libxext6 libxrender-dev git
#RUN pip install cython
#RUN pip install git+https://github.com/waleedka/coco.git#subdirectory=PythonAPI

RUN chmod -x analyzer_resource.py

ENTRYPOINT ["python"]
CMD ["analyzer_resource.py"]