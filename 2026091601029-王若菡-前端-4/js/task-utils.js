/**
 * 返回出现在数组 a 中、但没有出现在数组 b 中的任务。
 *
 * @param {string[]} a
 * @param {string[]} b
 * @returns {string[]}
 */

function difference(a, b) {
  // TODO 目标一：找出差异任务
  const setA = new Set(a); //把数组 a 装进“集合名单”，重复项自动只留一份【 new（造空对象 → 接上"说明书"原型 → 往里填数据 → 把这个对象交出来）】
  const setB = new Set(b);
  const resultSet = setA.difference(setB);
  const resultArray = Array.from(resultSet);//把 Set 转回数组
  return resultArray;
}
// 做完后页面呈现于原型相同的五个数据？（AI说是因为任务三没写完）
/**
 * 返回所有任务清单中共同包含的任务。
 *
 * @param {string[][]} taskLists 由多份任务数组组成的数组
 * @returns {string[]}
 */
function intersection(taskLists) {
  // TODO 目标二：找出共同任务
  // 想一想：taskLists 为空时应该返回什么？
  if (taskLists.length === 0) {
    return [];
  }

  let result = new Set(taskLists[0]);// 起点必须是第一份：空集合跟任何集合求交都是空，永远算不出结果
  for (const arr of taskLists) { //不写const或者let会报错
    result = result.intersection(new Set(arr));
  }

  return Array.from(result);
}

/**
 * 合并多份任务清单，并去除重复任务。
 *
 * @param {string[][]} taskLists 由多份任务数组组成的数组
 * @returns {string[]}
 */
function union(taskLists) {
  // TODO 目标三：汇总所有任务
  let result = new Set(taskLists[0]);//空集合也可以
  for (const arr of taskLists) {
    result = result.union(new Set(arr));
  }

  return Array.from(result);

}

// 将函数提供给页面中的index.js使用。
// 这一部分已经写好，不需要修改。
window.TaskUtils = {
  difference,
  intersection,
  union,
};
