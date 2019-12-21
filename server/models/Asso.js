const User                  = require('./User');
const Pet                   = require('./Pet');
const PetCategory           = require('./PetCategory');
const Sector                = require('./Sector');
const Place                 = require('./Place');
const PlaceCategory         = require('./PlaceCategory');

// FK: userId
User.hasMany(Pet, {
    as: 'pets',
    foreignKey: 'userId'
})

Pet.belongsTo(User, {
    as: 'user',
    foreignKey: 'userId'
})

// FK: petCategoryId
Pet.belongsTo(PetCategory, {
    as: 'pet-category',
    foreignKey: 'petCategoryId'
})

PetCategory.hasMany(Pet, {
    as: 'pets',
    foreignKey: 'petCategoryId'
})

// FK: sectorId
Sector.hasMany(Place, {
    as: 'places',
    foreignKey: 'sectorId'
});

Place.belongsTo(Sector, {
    as: 'sector',
    foreignKey: 'sectorId'
})

// FK: PlaceCategoryId
Place.belongsTo(PlaceCategory, {
    as: 'place-category',
    foreignKey: 'placeCategoryId'
})

PlaceCategory.hasMany(Place, {
    as: 'places',
    foreignKey: 'PlaceCategoryId'
})

/**
 User.belongsToMany(Track,{
     through: 'user_track',
     foreignKey: userId
     timestamps: false
 })
 */