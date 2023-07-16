import pygame
from pygame.constants import QUIT

pygame.init()

HEIGHT = 800 
WIDTH = 1200

main_display = pygame.display.set_mode((HEIGHT, WIDTH))

playing = True

while True:
    for event in pygame.event.get():
        if event.type == QUIT:
            playing = False
