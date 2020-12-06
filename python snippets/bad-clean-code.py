class Cordinates:
    def __init__(self, x, y):
        self.x = x
        self.y = y


class Rectangle:
    def __init__(self, starting_point, width, height):
        self.starting_point = starting_point
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def points(self):
        top_right = self.starting_point.x + self.width
        bottom_left = self.starting_point.y + self.height
        print('Starting Point (X)): ' + str(self.starting_point.x))
        print('Starting Point (Y)): ' + str(self.starting_point.y))
        print('End Point X-Axis (Top Right): ' + str(top_right))
        print('End Point Y-Axis (Bottom Left): ' + str(bottom_left))


def draw_angles():
    main_point = points(50, 100)
    rect = Rectangle(main_point, 90, 10)

    return rect


my_rect = draw_angles()

print(my_rect.area())
my_rect.points()
