# coding=utf-8

from sqlalchemy import Column, String
from marshmallow import Schema, fields
from .entity import Entity, Base


class Phone(Entity, Base):
    __tablename__ = 'phones'

    name = Column(String)
    phone = Column(String)

    def __init__(self, name, phone, created_by):
        Entity.__init__(self, created_by)
        self.name = name
        self.phone = phone

class PhoneSchema(Schema):
    id = fields.Number()
    name = fields.Str()
    phone = fields.Str()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()
    last_updated_by = fields.Str()
