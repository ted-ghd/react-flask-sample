# coding=utf-8

from .entities.entity import Session, engine, Base
from .entities.exam import Exam, ExamSchema
from .entities.phone import Phone, PhoneSchema
from flask import Flask, jsonify, request
################################
from flask_cors import CORS
################################

# generate database schema
Base.metadata.create_all(engine)

# creating the Flask application
app = Flask(__name__, static_url_path='')

###########################
CORS(app)
###########################

@app.route('/updatePhone', methods=['POST'])
def update_phone():
    requestData = request.get_json()
    #print(requestData)
    '''
    after_phone = Phone(requestData.get('name'), 
                            requestData.get('phone'), 
                            "6400256")
    
    after_phone.id = requestData.get('id')

    session = Session()
    session.merge(after_phone)
    '''
    _id = requestData.get('id')
    
    session = Session()
    session.query(Phone).filter_by(id=_id).update({
                'name': requestData.get('name'),
                'phone': requestData.get('phone')
    })

    session.commit()
    session.close()

    return 'OK', 200

@app.route('/deletePhone', methods=['POST'])
def delete_phone():
    requestData = request.get_json()
    #print(requestData)

    _id = requestData.get('id')
    
    session = Session()
    session.query(Phone).filter_by(id=_id).delete()
    session.commit()
    session.close()

    return 'OK', 200

@app.route('/insertPhone', methods=['POST'])
def insert_phone():
    requestData = request.get_json()
    #print(requestData)

    new_phone = Phone(requestData.get('name'), 
                            requestData.get('phone'), 
                            "6400256")
    session = Session()    
    session.add(new_phone)
    session.commit()
    session.close()

    return 'OK', 200

@app.route('/')
def web_root():
    return app.send_static_file('index.html')

@app.route('/generate')
def make_phone():
    # start session
    session = Session()

    # check for existing data
    phones = session.query(Phone).all()

    if len(phones) == 0:
        # create and persist dummy exam
        python_phone = Phone("김태성", "01049378022", "6400256")
        session.add(python_phone)
        session.commit()
        session.close()

    return 'OK', 200

@app.route('/exams')
def get_exams():
    # fetching from the database
    session = Session()
    exam_objects = session.query(Exam).all()

    #print(exam_objects)
    
    # transforming into JSON-serializable objects
    schema = ExamSchema(many=True)
    exams = schema.dump(exam_objects)

    #print(exams)
    
    # serializing as JSON
    session.close()
    return jsonify(exams.data)


@app.route('/phones')
def get_phones():
    # fetching from the database
    session = Session()

    phone_objects = session.query(Phone).order_by(Phone.id.desc()).all()

    #print(phone_objects)
    
    # transforming into JSON-serializable objects
    schema = PhoneSchema(many=True)
    phones = schema.dump(phone_objects)

    #print(phones)
    
    # serializing as JSON
    session.close()
    return jsonify(phones.data)
'''
# start session
session = Session()

# check for existing data
exams = session.query(Exam).all()

if len(exams) == 0:
    # create and persist dummy exam
    python_exam = Exam("SQLAlchemy Exam", "Test your knowledge about SQLAlchemy.", "6400256")
    session.add(python_exam)
    session.commit()
    
    # reload exams
    exams = session.query(Exam).all()
    session.close()

# show existing exams
print('### Exams:')
for exam in exams:
    print(f'({exam.id}) {exam.title} - {exam.description}')
'''