const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./Routes/userRoutes");
const eventRoutes = require("./Routes/eventRoutes");
const volunteerRoutes = require("./Routes/volunteerRoutes");
const profileRoutes = require("./Routes/profileRoutes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const {cloudinaryConnect} = require("./database/Cloudinary");
const fileUpload = require("express-fileupload");

const app = express();

app.use(express.json());
app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);
dotenv.config();
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	next();
})
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: "/tmp/",
	})
);
app.use(cookieParser());

cloudinaryConnect();
app.use("/api/v1",userRoutes);
app.use("/api/v1/profile",profileRoutes);
app.use("/api/v1",eventRoutes);
app.use("/api/v1",volunteerRoutes);

app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

const PORT = process.env.PORT || 4000;


app.listen(PORT,()=>{
	console.log("server started Succesfully");
})
