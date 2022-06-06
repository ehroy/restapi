const asyncHandler = require("express-async-handler");
const base = asyncHandler(async (req, res) => {
  const data = {
    name: "AHMAD SUROYYA MUTSADDAD",
    nim: "191240000937",
  };
  res.send(data);
});

const setbase = asyncHandler(async (req, res) => {
  //   console.log(req.body.text);
  if (!req.body.text) {
    throw new Error("Please Add Field");
  }
  const data = {
    status: true,
    mesaage: "Update Succesfully",
    id: req.params.id,
  };
  res.status(200).json(data);
});

const putbase = asyncHandler(async (req, res) => {
  const data = {
    status: true,
    mesaage: "Update Succesfully",
    id: req.params.id,
  };
  res.send(data);
});

const deletebase = asyncHandler(async (req, res) => {
  const data = {
    status: true,
    mesaage: "Delete Succesfully",
    id: req.params.id,
  };
  res.send(data);
});
module.exports = { base, setbase, putbase, deletebase };
