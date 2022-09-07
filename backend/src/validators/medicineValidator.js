import Joi from 'joi';

export const medicineValidator = Joi.object({
  name: Joi.string().label('Name').required(),
  quantity: Joi.number().label("Quantity").required(),
  category: Joi.string().label('Category').required(),
  description: Joi.string().label('Description').required(),
});

export const validateMedicine= (data) => {
  return medicineValidator.validate(data);
};