# FiveM Inventory System

A comprehensive inventory management system for FiveM roleplay servers, built to work with QB-Core framework and including NP style functionality.

## Overview

This inventory system provides a robust way to manage player inventories, item interactions, and storage systems in your FiveM server. It features a modern UI built with SolidJS and powerful server-side logic to handle all inventory operations securely.

## Features

- **Modern Web UI** - Clean, responsive interface built with SolidJS
- **Drag and Drop** - Intuitive item management with drag-and-drop functionality
- **Item Usage** - Fully configurable item interactions and contextual usage
- **Storage Systems** - Support for player inventory, vehicles, stashes, and ground drops
- **Permissions** - Integration with server permission systems for restricted items
- **Crafting** - Built-in support for crafting systems and recipes
- **Secure Backend** - Server-side validation to prevent exploits and cheating
- **QB-Core Integration** - Native compatibility with QB-Core framework
- **NP-Style Features** - Quality-of-life features inspired by the big city.

## Dependencies

This resource requires:

- QB-Core framework
- `np-taskbar` - For action progress bars
- `oxmysql` - Database operations
- `np-polyzone` - Inventory interaction zones
- `np-objects` - Object handling
- `ghost-lib` - Utility functions
- `focusmanager` - UI focus management
- `np-keybinds` - Key mapping
- `interactions` - Player-object interactions
- `inventory` - Inventory management.
- Node.js and npm for UI building

## Installation

1. **Download and Install**
   - Place the entire inventory folder in your server's resources directory

2. **Install Dependencies**
   ```bash
   cd inventory
   npm install
   ```

3. **Build the UI**
   ```bash
   npm run build
   ```

4. **Database Setup**
   - Required tables:
     - `user_inventory2` - Main inventory storage
     - `__objects` - Persistent world objects
   - Ensure these tables exist in your database

5. **Add to Server Config**
   - Add to your server.cfg:
   ```
   ensure inventory
   ```
   - Make sure all dependencies load before this resource

## Configuration

### Server Side

Key server configurations include:

- Item definitions and properties
- Inventory slots and weight limits 
- Usable items and their functions
- Stash locations and permissions

### Client Side

Client configurations control:

- Keybinds for inventory access
- UI appearance and behavior
- Animation settings for item usage
- Notification preferences

## Usage

### Player Commands

- `inventory` or assigned keybind - Opens player inventory
- `/giveitem [id] [item] [amount]` - Give item to another player (admin only)

## Troubleshooting

### Common Issues

1. **UI Not Loading**
   - Ensure the web UI was built using `npm run build`
   - Check browser console for errors (F8 in-game)

2. **Items Not Showing**
   - Verify item definitions exist in your database
   - Check server console for SQL errors


## Advanced Customization

### Adding Custom Items

1. Add the item definition to your items database table
2. Create item images (64x64px recommended) in `inventory/web/public/items/`
3. Add any server-side logic for item usage

### UI Customization

Modify the SolidJS components in the src directory to customize the UI.

After changes, rebuild with:
```bash
npm run build
```

## Item Configuration

Items are defined in `inventory/typescript/src/server/controllers/ItemList.ts`:

```ts
{
    name: "itemname",          // Unique identifier
    label: "Item Label",       // Display name
    weight: 1.0,               // Weight
    type: "item",              // Type (item, weapon, etc.)
    image: "itemname.png",     // Image in web/public/items/ or createImage()
    stackable: false,          // Whether items stack
    weapon: true,              // Is it a weapon
    weaponHash: -120179019,    // Weapon hash if applicable
    description: "Item description shown in tooltip",
    decayrate: 2.0,            // Degradation rate
    context: {
        useItem: true,         // Can the item be used
    }
}
```

## Technical Architecture

The system consists of several components working together:

### Client-Side
- **UI Interface**: SolidJS-based responsive inventory interface
- **Interaction System**: Manages interactions with items, containers, and drops

### Server-Side
- **Inventory Controller**: Core logic for inventory data management
- **AdditionalInventories**: Handles special inventory types (trunks, gloveboxes, etc.)
- **Item Actions**: Processes item usage and effects
- **Security Layer**: Validates operations to prevent exploits

### Communication
Client and server communicate through FiveM's event system with structured data validation for security.

## Credits

Based on NP features, adapted for optimal performance and user experience.