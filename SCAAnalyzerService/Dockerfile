FROM python:3.6.10-slim-buster

EXPOSE 5000

RUN apt-get update -y && \
    apt-get install -y python-pip python-dev

COPY . /app
WORKDIR /app

RUN pip install -r requirements.txt
RUN apt-get update && apt-get install -y libglib2.0-0 libsm6 libxext6 libxrender-dev git

RUN chmod -x analyzer_resource.py
RUN chmod -R 777 resources

ENTRYPOINT ["python"]
CMD ["analyzer_resource.py"]
