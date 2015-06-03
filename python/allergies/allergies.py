class Allergies(object):
    def __init__(self, score):
        new_score = score % self.max_score()
        self.list = self.create_allergy_list(new_score)

    allergies = ["eggs", "peanuts", "shellfish", "strawberries",
                 "tomatoes", "chocolate", "pollen", "cats"]

    def max_score(self):
        return 2**len(self.allergies)

    def is_allergic_to(self, item):
        return item in self.list

    def create_allergy_list(self, score):
        allergy_list = []
        for i, allergy in reversed(list(enumerate(self.allergies))):
            if score >= 2**i:
                allergy_list.insert(0, allergy)
                score -= 2**i
        return allergy_list
