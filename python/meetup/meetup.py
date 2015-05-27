from datetime import date
import calendar

def meetup_day(year, month, weekday, week):
    if week == "teenth":
        return date_by_weekday(year, month, weekday, 13)
    elif week == "last":
        last_day = calendar.monthrange(year, month)[1] + 1
        return date_by_weekday(year, month, weekday, last_day - 7)
    else:
        first_day = int(week[0]) * 7 - 6
        return date_by_weekday(year, month, weekday, first_day)

def date_by_weekday(year, month, weekday, first_day):
    for day in range(first_day, first_day + 7):
        if weekday == date(year, month, day).strftime("%A"):
            return date(year, month, day)
