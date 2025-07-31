# Quotation App - Midterm Project - Min Myint Moh Soe

A quotation management application built with React.js and Material-UI (MUI). This application allows users to create, manage, and calculate quotations with advanced features including discount management, intelligent item merging, and responsive design.

## Features

### Core Functionality
- **Product Selection**: Pre-populated product catalog with dynamic pricing
- **Quantity Management**: Flexible quantity input with validation
- **Discount System**: Individual item discounts with real-time calculations
- **Item Merging**: Automatic detection and merging of redundant items
- **Clear All**: One-click removal of all quotation items
- **Individual Item Deletion**: Remove specific items with trash icon
- **Discount Calculations**: `Amount = (Price × Quantity) - Discount`
- **Total Summaries**: Automatic calculation of total discounts and final amounts

## Technology Stack

- **Frontend Framework**: React 18.3.1
- **UI Library**: Material-UI (MUI) 6.1.7
- **Build Tool**: Vite 5.3.4
- **Styling**: Emotion (CSS-in-JS)
- **Icons**: React Icons 5.2.1 + MUI Icons
- **Type Checking**: PropTypes 15.8.1

##  Requirements Implemented

1. **Bootstrap to MUI Migration**: Complete replacement of Bootstrap with Material-UI
2. **Clear Button**: Removes all items from quotation table
3. **Discount Input Field**: Per-item discount functionality
4. **Discount Column**: Display of individual item discounts
5. **Total Discount**: Summary of all discounts in table footer
6. **Redundant Item Merging**: Smart detection based on name + price
7. **Original Features**: Preserved all existing Add/Delete functionality
8. **JSON Data Pre-filling**: Maintained product catalog loading

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or pnpm package manager

### Installation

1. **Clone or Download the Project**
   ```bash
   git clone <repository-url>
   # OR download and extract the ZIP file
   ```

2. **Navigate to Project Directory**
   ```bash
   cd wad-2025-mid
   ```

3. **Install Dependencies**
   ```bash
   npm install
   # OR
   pnpm install
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   # OR
   pnpm run dev
   ```

5. **Open Application**
   - Open your browser and navigate to `http://localhost:5173/midterm-quotation-app/`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint code analysis
```

## Project Structure

```
wad-2025-mid/
├── src/
│   ├── App.jsx              # Main application component
│   ├── QuotationTable.jsx   # Table component with quotation display
│   ├── main.jsx             # Application entry point
│   ├── index.css            # Global styles
│   └── App.css              # Component-specific styles
├── public/
│   └── vite.svg             # Application favicon
├── package.json             # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## Usage Guide

### Adding Items
1. Select a product from the dropdown menu
2. Enter quantity (minimum 1)
3. Enter discount amount (optional, minimum 0)
4. Click "Add" to add item to quotation

### Managing Items
- **Delete Individual Item**: Click the trash icon in any row
- **Clear All Items**: Click the "Clear" button (disabled when table is empty)
- **Automatic Merging**: Items with same name and price are automatically merged

### Calculation Logic
- **Item Amount**: `(Price per Unit × Quantity) - Discount`
- **Total Discount**: Sum of all individual item discounts
- **Final Total**: Sum of all discounted item amounts

