import { Controller, Get, Post, Render, Body } from '@nestjs/common';

@Controller('imc')
export class ImcController {
  @Get()
  @Render('imc-form') // Renderiza o formulário de IMC
  getForm() {
    return {
      fields: [
        { field: { label: 'Peso (kg)', type: 'text', name: 'weight', errors: false } },
        { field: { label: 'Altura (m)', type: 'text', name: 'height', errors: false } },
      ],
    };
  }

  @Post()
  @Render('imc-result') // Renderiza o resultado do IMC
  calculateImc(@Body() body: { weight: string; height: string }) {
    const weight = parseFloat(body.weight);
    const height = parseFloat(body.height);
    const imc = weight / (height * height);
    const imcFixed = imc.toFixed(2);
    const category = this.getImcCategory(imc);

    return { imc: imcFixed, weight, height, category };
  }

  private getImcCategory(imc: number): string {
    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      return 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
      return 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
      return 'Obesidade grau 1';
    } else if (imc >= 35 && imc < 39.9) {
      return 'Obesidade grau 2';
    } else {
      return 'Obesidade grau 3';
    }
  }
}