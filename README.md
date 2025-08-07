# Website Segments - Web Intelligence by Similarweb

A React web application that recreates the Website Segments interface from Similarweb's Web Intelligence platform.

## Features

- **Complete UI Recreation**: Faithful recreation of the Website Segments interface
- **Responsive Design**: Modern, clean interface with proper styling
- **Interactive Components**: Working tabs, buttons, and form elements
- **Navigation Sidebar**: Full navigation menu with all sections
- **Data Tables**: Website segments table with sorting capabilities
- **Search Functionality**: Search bar for filtering content
- **Pagination**: Working pagination controls

## Project Structure

```
src/
├── components/
│   ├── Sidebar.js          # Navigation sidebar component
│   └── MainContent.js      # Main content area with Website Segments
├── App.js                  # Main app component
├── index.js                # React entry point
└── index.css               # Global styles
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## Technology Stack

- **React 18** - Frontend framework
- **Styled Components** - CSS-in-JS styling
- **Lucide React** - Icon library
- **React Router DOM** - Client-side routing (ready for future use)

## Current Features

### Sidebar Navigation
- Complete navigation menu matching the original design
- Active state highlighting for current page
- All sections: Home, Dashboards, Website Research, Search Intelligence, etc.

### Main Content Area
- **Website Segments** page title
- **My Comparisons** section with tabs and comparison data
- **Search bar** for filtering content
- **Website Segments table** with:
  - Checkbox selection
  - Domain and segment information
  - Date modified column
  - Sortable headers
- **Pagination controls**
- **Action buttons** for creating new comparisons and segments

### Interactive Elements
- Working tab navigation
- Hover effects on buttons and table rows
- Form inputs with proper styling
- Responsive design elements

## Future Enhancements

This application is ready for the next phase of development, which will include:

1. **AI Segments Builder** - New feature for AI-powered segment creation
2. **Manual Segment Builder** - Enhanced segment creation interface
3. **Routing** - Multi-page navigation between different sections
4. **State Management** - Data persistence and state management
5. **API Integration** - Backend connectivity for real data

## Development Notes

- The application uses modern React patterns with functional components and hooks
- Styled Components provide a clean, maintainable styling approach
- The design closely matches the original Similarweb interface
- All interactive elements are properly implemented and ready for functionality 