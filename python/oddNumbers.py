import json

def getOddNumlist(n):
    oddNumList = []
    tmp = 1
    for i in range(n):
        oddNumList.append(tmp)
        tmp += 2
    value = {"oddNumList": oddNumList}
    return json.dumps(value)


print(getOddNumlist(20))

