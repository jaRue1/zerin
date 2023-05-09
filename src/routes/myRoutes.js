import express from "express"
import {
  getUsers,
  getMedications,
  addMedication,
  addUser,
  deleteMedication,
  updateMedication,
} from "../controllers/myControllers.js"
const router = express.Router()

router.get("/", (req, res) => {
  res.send("Welcome to my API")
})

router.get("/users", getUsers)
router.post("/users", addUser)

router.get("/medications", getMedications)
router.post("/medications", addMedication)
router.patch("/medications/:docId", updateMedication)
router.delete("/medications/:docId", deleteMedication)

export default router
