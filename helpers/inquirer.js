import inquirer from 'inquirer';
import colors from 'colors';

const questions = [
  {
    type: 'list',
    name: 'option',
    message: '¿Qué desea hacer?',
    choices: [
      {
        value: '1',
        name: `${'1.'.green} Crear tarea`,
      },
      {
        value: '2',
        name: `${'2.'.green} Listar tareas`,
      },
      {
        value: '3',
        name: `${'3.'.green} Listar tareas completadas`,
      },
      {
        value: '4',
        name: `${'4.'.green} Listar tareas pendientes`,
      },
      {
        value: '5',
        name: `${'5.'.green} Completar tarea(s)`,
      },
      {
        value: '6',
        name: `${'6.'.green} Borrar tarea`,
      },
      {
        value: '0',
        name: `${'0.'.green} Salir`,
      },
    ],
  },
];

export const inquirerMenu = async () => {
  console.clear();
  console.log('=========================='.green);
  console.log('  Seleccione una opción  '.white);
  console.log('==========================\n'.green);

  const { option } = await inquirer.prompt(questions);

  return option;
};

export const pausa = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'enter'.green} para continuar`,
    },
  ];

  console.log('\n');

  await inquirer.prompt(question);
};

export const leerInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Por favor ingrese un valor';
        }
        return true;
      },
    },
  ];

  console.log('\n');

  const { desc } = await inquirer.prompt(question);

  return desc;
};

export const listadoTareasBorrar = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}.`.green;
    return {
      value: tarea.id,
      name: `${idx} ${tarea.desc}`,
    };
  });

  choices.unshift({
    value: '0',
    name: '0.'.green + ' Cancelar',
  });

  const questions = [
    {
      type: 'list',
      name: 'id',
      message: 'Borrar',
      choices,
    },
  ];

  console.log('\n');

  const { id } = await inquirer.prompt(questions);

  return id;
};

export const confimar = async (message) => {
  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message,
    },
  ];

  console.log('\n');

  const { ok } = await inquirer.prompt(question);

  return ok;
};

export const mostrarListadoCheckList = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}.`.green;
    return {
      value: tarea.id,
      name: `${idx} ${tarea.desc}`,
      checked: tarea.completadoEn ? true : false,
    };
  });

  const question = [
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Seleccione:',
      choices,
    },
  ];

  console.log('\n');

  const { ids } = await inquirer.prompt(question);

  return ids;
};
