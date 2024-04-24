import face_recognition
image = face_recognition.load_image_file("tle1.jpg")
face_landmarks_list = face_recognition.face_landmarks(image)