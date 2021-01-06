import pyttsx3
import datetime

engine=pyttsx3.init()


def speak(audio):
    engine.say(audio)
    engine.runAndWait()



def time():
    Time=datetime.datetime.now().strftime('%I:%M:%S')
    
   
    speak(Time)

def wishme():
    speak("hello! Welcome to my A I assitant program")
    speak("Whats your name   ")
    speak("Please ! Enter your name")
    name=input("please enter your name")


    speak("hi  "+name +' my name is Jarvis    ')
    speak("The time is :    ")
    time()



wishme()