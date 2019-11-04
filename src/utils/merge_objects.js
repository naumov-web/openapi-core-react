import merge from 'merge';

export const mergeRecursive = (obj1 = {}, obj2 = {}) => merge.recursive(true, obj1, obj2);