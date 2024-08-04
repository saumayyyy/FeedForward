# FeedForward
Live Link:-https://feed-forward-red.vercel.app/
# Food Donation Event Platform

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen)

## Overview

The Food Donation Event Platform is a web application designed to facilitate the creation and management of food donation events. It connects donors with volunteers to contribute to the UN's 2nd Sustainable Development Goal (SDG) of Zero Hunger. The platform is built using the MERN stack, Tailwind CSS, React-Redux for state management, and Cloudinary for image uploads.

## Features

- **User Roles:**
  - **Donor:** Create, manage, and delete food donation events. Accept or reject volunteers and mark events as completed.
  - **Volunteer:** Register or unregister for events and view enrolled events.

- **User Profile Management:** Users can update their personal information and preferences.

- **Event Management:**
  - Create and manage events with details like name, location, date, time, and food type.
  - Upload event images using Cloudinary.

- **Points and Rewards System:** Earn and redeem points for participating in events.

- **Responsive Design:** Mobile-first approach with responsive layouts using Tailwind CSS.

- **Accessibility:** Adheres to accessibility standards for a better user experience.

## Technologies Used

- **Frontend:** React.js, Tailwind CSS, React-Redux
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Image Uploads:** Cloudinary
- **Authentication:** JSON Web Tokens (JWT)
- **Deployment:** Vercel (frontend), Render (backend)

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB
- Cloudinary account

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/food-donation-platform.git
    cd food-donation-platform
    ```

2. **Install dependencies for both frontend and backend:**

    ```bash
    # Install backend dependencies
    cd backend
    npm install

    # Install frontend dependencies
    cd ../frontend
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the `backend` directory and add the following:

    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    ```

### Running the Application

1. **Start the backend server:**

    ```bash
    cd backend
    npm start
    ```

2. **Start the frontend development server:**

    ```bash
    cd frontend
    npm start
    ```

3. **Open your browser and navigate to:**

    ```
    http://localhost:3000
    ```

## Future Enhancements

- Develop a mobile application.
- Implement advanced analytics and reporting.
- Enhance the points-based reward system with gamification.
- Integrate with other platforms and services.
- Strengthen security features.
- Add localization and multilingual support.
- Implement a robust feedback and support system.
- Develop an automated volunteer matching system.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING](CONTRIBUTING.md) guidelines first.

## Contact

For questions or suggestions, please open an issue or contact the project maintainer.

---

Thank you for using the Food Donation Event Platform and contributing to the fight against hunger!

