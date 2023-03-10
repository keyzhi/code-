import numpy as np

return_array1 = np.array([
    [-0.035099,0.01723,-0.00345,-0.024551,0.039368],
    [-0.013892,0.024334,-0.033758,0.014622,0.000128],
    [0.005848,-0.002907,0.005831,0.005797,-0.005764],
    [0.021242,0.002133,-0.029803,-0.002743,-0.014301]
])

# print(return_array1.shape)

# 1.计算矩阵的性质  计算4只股票日涨跌幅的相关系数矩阵，
corr_return = np.corrcoef(return_array1)
print(corr_return)