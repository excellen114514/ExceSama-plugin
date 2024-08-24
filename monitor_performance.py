import psutil
import time

def monitor_performance():
    # 获取 CPU 占用率
    cpu_percent = psutil.cpu_percent()

    # 获取内存占用率
    memory = psutil.virtual_memory()
    ram_percent = memory.percent

    # 打印结果
    print(f"CPU Utilization: {cpu_percent}%")
    print(f"RAM Utilization: {ram_percent}%")

if __name__ == "__main__":
    monitor_performance()
