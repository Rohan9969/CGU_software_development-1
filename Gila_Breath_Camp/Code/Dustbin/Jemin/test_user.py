import sys
sys.path.append("Python/Entities")
import applicant
# import bunkhouse
ur = applicant.Applicant()    # Initialization

'''print('ur.setFirstName("Jemin ") :',ur.setFirstName("Jemin 1"))
=======
ur = bunkhouse.Bunkhouse()


print('ur.setBunkhouseName("Test 2") :',ur.setBunkhouseName("Test") )

print(ur.__dict__)



print('ur.setTribeName("Tribe 1") :',ur.setTribeName("TesT      "))
print(ur.getTribeName())
print(ur.__dict__)

'''

print('ur.setFirstName("Jemin ") :',ur.setFirstName("Jemin "))
# >>>>>>> refs/remotes/origin/master
print('ur.setLastName("Gohil")',ur.setLastName("Gohil"))
print(ur.getFirstName())
print(ur.getLastName())

print('ur.setGuardianFirstName("Abc"):',ur.setGuardianFirstName("Abc"))
print('ur.setGuardianLastName("gohil "):',ur.setGuardianLastName("gohil "))
print(ur.getGuardianFirstName())
print(ur.getGuardianLastName())

print('ur.setGuardianContactNumber("9092283636 "):',ur.setGuardianContactNumber("9092283636 "))
print(ur.getGuardianContactNumber())

print('ur.setApplicationDate:', ur.setApplicationDate('10-04-2016'))
print(ur.getApplicationDate())

print('ur.setEmergencyContact:',ur.setEmergencyContact("9092283636 "))
print(ur.getEmergencyContact())

print('ur.setAge:', ur.setAge('20'))
print(ur.getAge())

print('ur.setGender:', ur.setGender('M'))
print(ur.getGender())

print(ur.__dict__)

