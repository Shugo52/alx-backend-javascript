export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError("Name must be a String.");
    } else {
      this._name = name;
    }

    if (typeof length !== 'number') {
      throw new TypeError("Length must be a Number.");
    } else {
      this._length = length;
    }

    if (!Array.isArray(students)) {
      throw new TypeError("Students must be an Array.");
    } else {
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  set name(nameSet) {
    if(typeof nameSet !== 'string') {
      throw new TypeError("Name must be a String.");
    }
    this._name = nameSet;
  }

  get length() {
    return this._length;
  }

  set length(lengthSet) {
    if(typeof lengthSet !== 'number') {
      throw new TypeError("Length must be a Number.");
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
