import service from "./register.service";
import { Request, Response } from "express";

const {
  createRegister,
  getRegisters,
  getRegisterById,
  updateRegisterById,
  deleteRegisterById,
} = service;

export async function createRegisterController(req: Request, res: Response) {
  try {
    const newReg = req.body;
    console.log("🚀 ~ file: register.controller.ts ~ line 15 ~ createRegisterController ~ newReg", newReg)
    const register = await createRegister(newReg);
    res.status(201).json(register);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function getRegistersController(req: Request, res: Response) {
  try {
    const registers = await getRegisters();
    res.status(200).json(registers);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function getRegisterByIdController(req: Request, res: Response) {
  try {
    const register = await getRegisterById(req.params.id);
    res.status(200).json(register);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function updateRegisterByIdController(
  req: Request,
  res: Response
) {
  try {
    const register = await updateRegisterById(req.params.id, req.body);
    res.status(200).json(register);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function deleteRegisterByIdController(
  req: Request,
  res: Response
) {
  try {
    const register = await deleteRegisterById(req.params.id);
    res.status(200).json(register);
  } catch (error) {
    res.status(500).json(error);
  }
}
