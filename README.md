# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

# coffee-shop-app

a coffee shop app build it with React native.

# ☕ Coffee Shop App

A modern, elegant React Native mobile application for a coffee shop, built with Expo and featuring beautiful UI components, comprehensive menu display, and contact information.

## 📱 Demo

![Coffee Shop Demo](./demo.gif)

> Try out the interactive menu and contact features!

## 🚀 Features

### 📱 Core Functionality

- **Interactive Menu**: Browse through 10 different coffee beverages with high-quality images
- **Contact Information**: Easy access to shop location, phone, and hours
- **Cross-Platform**: Runs on iOS, Android, and Web
- **Modern UI**: Clean, responsive design with dark/light theme support

### ☕ Coffee Menu

Our app showcases a comprehensive coffee menu featuring:

- Espresso - Strong, concentrated coffee
- Americano - Espresso diluted with hot water
- Latte - Espresso with steamed milk and foam
- Cappuccino - Equal parts espresso, milk, and foam
- Macchiato - Espresso with a dollop of foam
- Mocha - Latte with chocolate flavor
- Flat White - Espresso with velvety steamed milk
- Cortado - Equal parts espresso and milk
- Cold Brew - Cold water brewed coffee
- Affogato - Espresso over ice cream

## 🛠️ Tech Stack

- **Framework**: React Native with Expo
- **Language**: JavaScript/TypeScript
- **Navigation**: Expo Router with file-based routing
- **UI Components**: Custom themed components
- **Icons**: Expo Vector Icons
- **State Management**: React Hooks
- **Development**: Expo CLI

## 📦 Dependencies

### Core Dependencies

- React Native 0.79.2
- Expo ~53.0.9
- Expo Router ~5.0.6
- React Navigation
- Expo Image
- Expo Vector Icons

### Development Tools

- TypeScript
- ESLint with Expo config
- Babel

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd coffee-shop-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Run on specific platforms**

   ```bash
   # iOS
   npm run ios

   # Android
   npm run android

   # Web
   npm run web
   ```

## 📁 Project Structure

```
coffee-shop-app/
├── app/                    # App routes (Expo Router)
│   ├── _layout.jsx        # Root layout
│   ├── index.jsx          # Home screen
│   ├── menu.jsx           # Menu screen
│   ├── contact.jsx        # Contact screen
│   └── +not-found.jsx     # 404 page
├── assets/                # Static assets
│   ├── images/            # App images
│   │   ├── menu/          # Coffee menu images
│   │   └── ...            # Other images
│   └── fonts/             # Custom fonts
├── components/            # Reusable UI components
│   ├── ui/                # UI components
│   ├── ThemedText.tsx     # Themed text component
│   ├── ThemedView.tsx     # Themed view component
│   └── ...
├── constants/             # App constants
│   ├── Colors.ts          # Color theme definitions
│   ├── MenuItems.jsx      # Menu data
│   └── MenuImages.jsx     # Menu image imports
├── hooks/                 # Custom React hooks
└── scripts/               # Build and utility scripts
```

## 🎨 Design Features

- **Responsive Layout**: Adapts to different screen sizes
- **Theme Support**: Automatic dark/light mode detection
- **Beautiful Imagery**: High-quality coffee photos for each menu item
- **Modern Typography**: Clean, readable fonts
- **Smooth Navigation**: Intuitive navigation between screens
- **Interactive Elements**: Clickable phone numbers and messaging

## 📱 Screenshots

The app features three main screens:

1. **Home Screen**: Welcome screen with navigation to menu and contact
2. **Menu Screen**: Interactive list of coffee beverages with images
3. **Contact Screen**: Shop location, hours, and contact information

## 🔧 Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run on web browser
- `npm run lint` - Run ESLint for code quality
- `npm run reset-project` - Reset the project to initial state

## 🌟 Key Components

### Menu System

- **MenuItems.jsx**: Centralized menu data management
- **MenuImages.jsx**: Image asset organization
- **FlatList Implementation**: Efficient list rendering with separators

### UI Components

- **ThemedText/ThemedView**: Automatic theme adaptation
- **ParallaxScrollView**: Smooth scrolling experience
- **HapticTab**: Touch feedback for interactions

### Navigation

- **Expo Router**: File-based routing system
- **Tab Navigation**: Easy switching between main sections

## 🚀 Deployment

### Building for Production

1. **Configure app.json**

   - Update app name, version, and metadata
   - Set appropriate icons and splash screens

2. **Build the app**

   ```bash
   # For Android
   expo build:android

   # For iOS
   expo build:ios
   ```

3. **Publish to app stores**
   - Follow Expo's publishing guidelines
   - Submit to Google Play Store and Apple App Store

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For questions about this project, please contact:

**Coffee Shop**

- 📍 555 Coffee Lane, Kansas City, KS 55555-1234
- 📞 555-555-5555
- 🕐 Open 6am to 4pm daily

## 🙏 Acknowledgments

- Coffee images sourced from high-quality stock photography
- Built with love using React Native and Expo
- Inspired by modern coffee shop experiences

---

**Enjoy your virtual coffee experience!** ☕✨
