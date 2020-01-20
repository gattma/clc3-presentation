import os
from app import app
from flask import request, jsonify
from werkzeug.utils import secure_filename
from analyzer_service import VideoAnalyzer


ALLOWED_EXTENSIONS = {'mp4', 'avi'}


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/analyze', methods=['POST'])
def analyze_video():
    if 'file' not in request.files:
        resp = jsonify({'message': 'No file part in the request'})
        resp.status_code = 400
        return resp
    file = request.files['file']
    if file.filename == '':
        resp = jsonify({'message': 'No file selected for uploading'})
        resp.status_code = 400
        return resp
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        video_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(video_path)

        analyzer_service = VideoAnalyzer()
        workflow, images, labels = analyzer_service.process(video_path)

        resp = jsonify({'workflow': workflow, 'images': images, 'labels': labels})
        resp.status_code = 200
        return resp
    else:
        resp = jsonify({'message': 'Allowed file types are mp4, avi'})
        resp.status_code = 400
        return resp


if __name__ == '__main__':
    app.run(host='0.0.0.0')
