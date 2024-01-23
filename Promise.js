function Promise(executor) {
  this.PromiseState = "pending";
  this.PromiseResult = null;

  const self = this;
  this.callbacks = [];
  function resolve(value) {
    if (self.PromiseState !== "pending") return;
    self.PromiseState = "fulfilled";
    self.PromiseResult = value;
    self.callbacks.forEach((item) => {
      item.onResolve(value);
    });
  }

  function reject(reason) {
    if (self.PromiseState !== "pending") return;
    self.PromiseState = "rejected";
    self.PromiseResult = reason;
    self.callbacks.forEach((item) => {
      item.onReject(reason);
    });
  }
  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

//添加then方法
Promise.prototype.then = function (onResolve, onReject) {
  if (this.PromiseState === "fulfilled") {
    onResolve(this.PromiseResult);
  }
  if (this.PromiseState === "rejected") {
    onReject(this.PromiseResult);
  }

  if (this.PromiseState === "pending") {
    //保存回调函数
    this.callbacks.push({
      onResolve: onResolve,
      onReject: onReject,
    });
  }
};
