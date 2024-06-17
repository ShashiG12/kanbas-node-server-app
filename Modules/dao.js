import model from "./model.js";
export const findModulesForCourse = (courseID) => model.find({"course": courseID});
export const createModule = (module) => {
    delete module._id
    return model.create(module);
  }  
export const deleteModule = (moduleID) => model.deleteOne({ _id: moduleID });
export const updateModule = (moduleID, module) =>  model.updateOne({ _id: moduleID }, { $set: module });