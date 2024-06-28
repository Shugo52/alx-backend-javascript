export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(nameSet) {
    if(typeof nameSet !== 'string') {
      throw new TypeError("Name must be a string.");
    }
    this._name = nameSet;
  }

  get length() {
    return this._length;
  }

  set length(lengthSet) {
    if(typeof lengthSet !== 'number') {
      throw new TypeError("Length must be a number.");
    }
    this._length = lengthSet;
  }

  get students() {
    return this._students;
  }

  set students(studentsSet) {
    if(!Array.isArray(studentsSet)) {
      throw new TypeError("Students must be an array.");
    }
    this._students = studentsSet;
  }
}
