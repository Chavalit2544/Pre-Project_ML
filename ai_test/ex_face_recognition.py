import face_recognition 
import numpy as np 
import cv2

video_capture = cv2.VideoCapture(0) 

p_image = face_recognition.load_image_file("chavalit.jpg")
p_face_encoding = face_recognition.face_encodings(p_image)[0]

oval_image = face_recognition.load_image_file("face-shape-oval.png")
oval_face_encoding = face_recognition.face_encodings(oval_image)[0]

long_image = face_recognition.load_image_file("face-shape-long.png")
long_face_encoding = face_recognition.face_encodings(long_image)[0]

heart_image = face_recognition.load_image_file("face-shape-heart.png")
heart_face_encoding = face_recognition.face_encodings(heart_image)[0]

round_image = face_recognition.load_image_file("face-shape-round.png")
round_face_encoding = face_recognition.face_encodings(round_image)[0]

square_image = face_recognition.load_image_file("face-shape-square.png")
square_face_encoding = face_recognition.face_encodings(square_image)[0]

# diamond_image = face_recognition.load_image_file("face-shape-diamond.png")
# diamond_face_encoding = face_recognition.face_encodings(diamond_image)[0]

face_locations = []
face_encodings = []
face_names = []
face_percent = []

process_this_frame = True

known_face_encodings = [oval_face_encoding, long_face_encoding, heart_face_encoding, round_face_encoding, square_face_encoding,p_face_encoding]
known_face_names = ["Oval", "Long", "Heart", "Round", "Square", "Diamond","Chavalit"]


while True:
    ret, frame = video_capture.read()
    if ret:
        small_frame = cv2.resize(frame, (0,0), fx=0.11,fy=0.011)
        rgb_small_frame = small_frame[:,:,::-1]

        face_names = []
        face_percent = []

        if process_this_frame:

            face_locations = face_recognition.face_locations(small_frame, model="cnn")
            face_encodings = face_recognition.face_encodings(small_frame, face_locations)
            
            for face_encoding in face_encodings:
                face_distances = face_recognition.face_distance(known_face_encodings, face_encoding)
                best = np.argmin(face_distances)
                face_percent_value = 1-face_distances[best]

                if face_percent_value >= 0.50:
                    name = known_face_names[best]
                    percent = round(face_percent_value,2)
                    face_percent.append(percent)
                else:
                    name = "UNKNOWN"
                    face_percent.append(0)
                face_names.append(name)

        for (top,right,bottom, left), name, percent in zip(face_locations, face_names, face_percent):
            top*= 2
            right*= 2
            bottom*= 2
            left*= 2

            if name == "UNKNOWN":
                color = [46,2,209]
            else:
                color = [255,102,51]

            cv2.rectangle(frame, (left,top), (right,bottom), color, 2)
            cv2.rectangle(frame, (left-1, top -30), (right+1,top), color, cv2.FILLED)
            cv2.rectangle(frame, (left-1, bottom), (right+1,bottom+30), color, cv2.FILLED)
            font = cv2.FONT_HERSHEY_DUPLEX
            cv2.putText(frame, name, (left+6, top-6), font, 0.6, (255,255,255), 1)
            cv2.putText(frame, "MATCH: "+str(percent)+"%", (left+6, bottom+23), font, 0.6, (255,255,255), 1)

        process_this_frame = not process_this_frame

        cv2.imshow("Video", frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    else:
        break

video_capture.release()
cv2.destroyAllWindows()