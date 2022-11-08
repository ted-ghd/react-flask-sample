# coding=utf-8
import json
from flask import Flask, jsonify, request
from flask_cors import CORS
from .entities.entity import Session, engine, Base
from .entities.exam import Exam, ExamSchema

###################################################
from .entities.phone_book import PhoneBook, PhoneBookSchema
###################################################

app = Flask(__name__)

CORS(app)

# generate database schema
Base.metadata.create_all(engine)

@app.route('/phones')
def get_phone():
    session = Session()
    phone_objects = session.query(PhoneBook).all()
    schema = PhoneBookSchema(many=True)
    phones = schema.dump(phone_objects)
    session.close()
    return jsonify(phones), 200

@app.route('/exams')
def get_exam():
    session = Session()
    exam_objects = session.query(Exam).all()
    schema = ExamSchema(many=True)
    exams = schema.dump(exam_objects)
    session.close()
    return jsonify(exams), 200



# DB에 로그인 하는 부분 
session = Session()

exams = session.query(Exam).all()

if len(exams) == 0:
    # create and persist dummy exam
    python_exam = Exam("Kim tae seong", "hpc tech team", "E640025")
    session.add(python_exam)
    session.commit()
    session.close()

    # reload exams
    exams = session.query(Exam).all()

print('### Exams:')

examSchema = ExamSchema(many=True)
examJson = examSchema.dump(exams)

print(json.dumps(examJson))

# DB 로그아웃
session.close()