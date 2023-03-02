def solution(phone_book):
    if (len(phone_book) == 1): 
        return True
    sorted_phone_book = sorted(phone_book)
    for i in range(len(sorted_phone_book) - 1):
        if (sorted_phone_book[i+1].startswith(sorted_phone_book[i])):
            return False
        else:
            continue
    return True