// Async.parallel: Executes an array of asynchronous functions in parallel
async function parallel(tasks) {
    try {
      const results = await Promise.all(tasks.map(task => task()));
      return results;
    } catch (error) {
      throw error;
    }
  }
  
  // Async.series: Executes an array of asynchronous functions in series
  async function series(tasks) {
    try {
      const results = [];
      for (const task of tasks) {
        const result = await task();
        results.push(result);
      }
      return results;
    } catch (error) {
      throw error;
    }
  }
  
  // Example usage
  async function task1() {
    return new Promise(resolve => {
      setTimeout(() => resolve('Task 1 Done'), 1000);
    });
  }
  
  async function task2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('Task 2 Failed')), 1500);
    });
  }
  
  async function task3() {
    return new Promise(resolve => {
      setTimeout(() => resolve('Task 3 Done'), 800);
    });
  }
  
  async function main() {
    try {
      // Parallel execution
      const parallelResults = await parallel([task1, task2, task3]);
      console.log('Parallel Results:', parallelResults);
    } catch (error) {
      console.error('Error during parallel execution:', error.message);
    }
  
    try {
      // Series execution
      const seriesResults = await series([task1, task2, task3]);
      console.log('Series Results:', seriesResults);
    } catch (error) {
      console.error('Error during series execution:', error.message);
    }
  }
  
  main();
  