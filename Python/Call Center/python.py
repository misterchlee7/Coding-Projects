class Call(object):
    def __init__(self, unique_id, caller_name, caller_num, time, reason):
        self.unique_id = unique_id
        self.caller_name = caller_name
        self.caller_num = caller_num
        self.time = time
        self.reason = reason
    
    def display(self):
        print "ID: {}, Caller name: {}, Caller number: {}, Time of Call: {}, Reason for call: {}".format(self.unique_id, self.caller_name, self.caller_num, self.time, self.reason)
    

class CallCenter(object):
    def __init__(self, calls=[]):
        self.calls = calls

    def add(self, new_call):
        self.calls.append(new_call)
        self.queue = len(self.calls)
        return self

    def remove(self):
        del self.calls[0]
        self.queue = len(self.calls)
        return self

    def smart_remove(self, phone_num):
        for call in self.calls:
            if(call.caller_num == phone_num):
                self.calls.remove(call)
        self.queue = len(self.calls)
        return self

    def info(self):
        for call in self.calls:
            print call.caller_name, call.caller_num
        print "The queue length is " + str(self.queue)


call1 = Call(111, "Adam", "111-1111", 10, "hungry")
call2 = Call(222, "Beth", "222-2222", 20, "sad")
call3 = Call(333, "Cindy", "333-3333", 30, "angry")
call4 = Call(444, "Dan", "444-4444", 40, "bored")

callcenter = CallCenter()
callcenter.add(call1).add(call2).add(call3).add(call4).smart_remove("333-3333").info()
    
