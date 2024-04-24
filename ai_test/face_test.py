import face_recognition

database_image = face_recognition.load_image_file('1.png')
database_encoding = face_recognition.face_encodings(database_image)[0]

sample_image = face_recognition.load_image_file('tle1.jpg')
sample_encoding = face_recognition.face_encodings(sample_image)[0]

result =  face_recognition.compare_faces([database_encoding],sample_encoding)
if result[0] == True:
    print("Yes It's Tle")
else:
    print("No It's not me!!")