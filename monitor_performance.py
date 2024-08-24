import psutil
import time

def get_performance():
    # 获取 CPU 占用率（所有核心）
    cpu_percent = psutil.cpu_percent(percpu=True)

    # 计算平均 CPU 占用率
    cpu_usage = sum(cpu_percent) / len(cpu_percent)

    # 获取内存占用率
    memory = psutil.virtual_memory()
    ram_percent = memory.percent

    return cpu_usage, ram_percent

if __name__ == "__main__":
    for i in range(3):
        cpu_usage, ram_percent = get_performance()
        print(f"Iteration {i + 1}:")
        print(f"CPU 占用率: {cpu_usage:.2f}%")
        print(f"RAM 占用率: {ram_percent}%")
        time.sleep(2)
