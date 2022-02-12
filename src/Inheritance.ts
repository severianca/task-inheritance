interface IPersonData {
    name: string;
    secondName: string;
    age: number;
}

interface IStudentData extends IPersonData {
    phone: string;
}

/*
1. Напишите конструктор, который принимает в качестве параметра объект с интерфейсом IPersonData
2. Добавьте метод getData(), возвращающий объект, соответствующий интерфейсу IPersonData
 */
export class Person {
    readonly _name: string;
    readonly _secondName: string;
    readonly _age: number;
    constructor(person: IPersonData) {
        this._name = person.name;
        this._secondName = person.secondName;
        this._age = person.age;
    }

    getData(): IPersonData {
        return {
            age: this._age,
            secondName: this._secondName,
            name: this._name,
        };
    }
}

/*
1. Напишите конструктор, который принимает в качестве параметра объект с интерфейсом IStudentData
2. Добавьте метод getData(), возвращающий объект, соответствующий интерфейсу IStudentData
 */
export class Student extends Person {
    readonly _phone: string;

    constructor(student: IStudentData) {
        super({
            name: student.name,
            secondName: student.secondName,
            age: student.age,
        });
        this._phone = student.phone;
    }

    getData(): IStudentData {
        return { ...super.getData(), ...{ phone: this._phone } };
    }
}
