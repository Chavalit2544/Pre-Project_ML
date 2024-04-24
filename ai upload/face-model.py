import face_recognition
from PIL import Image, ImageDraw
import pickle

know_faces = [
    ['oval','face-shape-oval.png'],
    ['long','face-shape-long.png'],
    ['round','face-shape-round.png'],
    ['square','face-shape-square.png'],
    ['heart','face-shape-heart.png'],
    # ['diamond','face-shape-diamond.png']
]

know_faces_name =[]
know_faces_encoding = []
for face in know_faces:
    # print(face[0])
    know_faces_name.append(face[0])
    face_image = face_recognition.load_image_file(face[1])
    face_encoding = face_recognition.face_encodings(face_image)[0]
    know_faces_encoding.append(face_encoding)
    

pickle.dump((know_faces_name, know_faces_encoding),open('face.p', 'wb'))