import numpy as np

# 普通方法计算一日投资组合收益率 不使用numpy库

#2020.5.25 4只股票的日涨跌幅
# return_May25 = [-0.035099,-0.013892,0.005848,0.021242]

# #4只股票的配置权重
# weight_list = [0.15,0.20,0.25,0.40]

# #股票数量
# n = len(weight_list)


# #创建存放每只股票收益率与配置权重数乘积的空列表
# return_weight = []

# for i in range(n):
#     return_weight.append(return_May25[i] * weight_list[i]) #将计算结果存放在列表末尾


# return_port_May25 = sum(return_weight)

# print('2020年5月25日投资组合的收益率',round(return_port_May25,6))  #round（x，n）方法将返回x的值，该值四舍五入到小数点后的n位数字


# 使用numpy库
# weight_array1 =np.array([0.15,0.20,0.25,0.40])
# print(type(weight_array1)) #查看数据结构 numpy.ndarray

# print(weight_array1.shape) #查看数组形状 (4,)