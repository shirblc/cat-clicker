# Cat Clicker

Code written by Shir Bar Lev.

## Current Version

Version 5.

## Description

A version of the popular 2010 Facebook game "cow clicker", built with cats instead of cows. Click the cute kitten pictures and watch the click number rise!

## Requirements

- Any browser released after 2015.

## Installation & Usage

- Download/clone the project
- Open index.html
- Play the game! If you need assistance press the information button.

## Customization

You can replace the cat photos with any photo you like, either by adding them to the project "imgs" folder or by editing the URL in the admin menu. You can also change the cats' names and click number through the same menu.
You can add any number of cats by adding them to the Model.

## The Code

The code is fully documented.

The code is built in three fronts: Model, View and Octopus (similar to Controller in the MVC model). 

- **The Model** - Contains the cats' details and the cat objects.
- **The View** - Contains the UI: the cat photos, the navigation menu and the admin menu.
- **The Octopus** - Responsible for any data transfer between the model and the view. Includes methods to get the details of a single cat (to display on screen), to increase the number of clicks in the model, and to change cats' details (in accordance with the user's input in the Admin Menu).

### Previous Versions

1. **Version 1** - Included one cat.
2. **Version 2** - Included two cats. The first version to include flexbox for better cross-device compatibility.
3. **Version 3** - Included five cats. The first version to be built using ES6 classes in order to simplify the addition of the cats.
4. **Version 4** - Refactored code implementing the MVO (Model, View, Octopus) concept (by Udacity). The first version to fully separate the data from the view.

## Known Issues

There are no known issues at the time.