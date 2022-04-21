// 考虑null(不是引用类型但判断为object)和function（是引用类型但判断为function）
function isRefType(target) {
  let type = typeof target;
  return target !== null && (type === "object" || type === "function");
}

function deepClone(target = {}, map = new WeakMap()) {
  // 如果是原始类型直接返回
  if (!isRefType(target)) {
    return target;
  }
  if (map.get(target)) {
    return map.get(target);
  }

  // 初始版：只能遍历对象和数组，我们使用下面这种构造函数的方法
  // let cloneTarget =
  //   Array.isArray(target) ||
  //   Object.prototype.toString.call(target) === "[object Array]"
  //     ? []
  //     : {};

  //创建cloneTarget（使用构造函数来创建，用来拷贝更多的类型）
  const targetConstructor = target.constructor;
  let cloneTarget = new targetConstructor();
  //获取target的类型
  const targetType = Object.prototype.toString.call(target);

  // 对循环引用进行拷贝
  map.set(target, cloneTarget);

  // 拷贝map
  if (targetType === "[object Map]") {
    target.forEach((value, key) => {
      cloneTarget.set(key, deepClone(value));
    });
    return cloneTarget;
  }

  // 拷贝set
  if (targetType === "[object Set]") {
    target.forEach(value => {
      cloneTarget.add(deepClone(value));
    });
    return cloneTarget;
  }

  if (targetType === "[object Function]") {
    if (!target.prototype) {
      return eval(target.toString());
    }
    return target.toString();
  }

  // 进行循环克隆（对象以及数组）
  for (const key in target) {
    if (Object.hasOwnProperty.call(target, key)) {
      cloneTarget[key] = deepClone(target[key], map);
    }
  }
  return cloneTarget;
}

const map = new Map();
map.set("key", "value");
map.set("ConardLi", "code秘密花园");

const set = new Set();
set.add("ConardLi");
set.add("code秘密花园");

const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: "child",
  },
  field4: [2, 4, 8],
  empty: null,
  map,
  set,
  func1: () => {
    console.log("code秘密花园");
  },
  func2: function (a, b) {
    return a + b;
  },
};

target.target = target;
console.time();
const result = deepClone(target);
console.timeEnd();
console.log(result);
