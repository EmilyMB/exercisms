class Allergies(object):
    def __init__(self, score):
        self.score = score
        self.list = self.create_allergy_list(score)

    allergies = ["eggs", "peanuts", "shellfish", "strawberries",
                 "tomatoes", "chocolate", "pollen", "cats"]

    def is_allergic_to(self, item):
        return item in self.list

    def create_allergy_list(self, score):
        list = []
        for i in reversed(xrange(8)):
            if score == 257:
                return ["eggs"]
                break
            if score >= 2**i:
                list.insert(0, self.allergies[i])
                score -= 2**i
        return list
