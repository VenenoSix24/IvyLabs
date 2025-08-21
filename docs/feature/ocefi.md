---
# https://vitepress.dev/reference/default-theme-home-page
# 指定使用 VitePress 的首页布局
layout: home
pageClass: home-page

# 个人名片区域 (Hero Section)
hero:
  name: "Hackintosh OC EFI"
  text: "黑苹果的故事要结束咯"
  tagline: 适配微星 B350M 迫击炮主板与 AMD CPU/GPU 的黑苹果 OpenCore 配置
  image:
    src: "/ocefi3.png"
    alt: Ivy Labs
  actions:
    - theme: brand
      text: 下载配置
      link: "https://github.com/VenenoSix24/MSI-B350M-MORTAR-Hackintosh-OpenCore-EFI/releases"
    - theme: alt
      text: 快速上手
      link: /feature/ocefi#快速使用指南
    - theme: alt
      text: 了解更多
      link: "https://github.com/VenenoSix24/MSI-B350M-MORTAR-Hackintosh-OpenCore-EFI"
# 项目展示区域 (Features Section)
# features:
#   - icon: 🤖
#     title: 我去抢个座
#     details: 基于 Python 实现的图书馆预约抢座系统，简化每日重复操作。
#     link: "https://github.com/VenenoSix24/igolib-ldu"
#   - icon: 🌸
#     title: 总之就是非常可爱
#     details: 一个高度可定制化的个人网站/主页/博客模板，追求极致美观。
#     link: "https://github.com/VenenoSix24/kawaii-homepage"
#   - icon: 🍎
#     title: Hackintosh OC EFI
#     details: 适配微星 B350M 迫击炮主板与 AMD CPU/GPU 的黑苹果 OpenCore 配置。
#     link: "https://github.com/VenenoSix24/MSI-B350M-MORTAR-Hackintosh-OpenCore-EFI"
#   - icon: 🎲
#     title: 打瓦加密器
#     details: 一个有趣的文本加密工具，使用“打”和“瓦”作为二进制来进行加解密。
#     link: "https://github.com/VenenoSix24/DV-Encrypter"
---

> **为微星 B350M 迫击炮主板打造的 macOS Sequoia 开箱即用型 EFI**。
>
> **适配 Ryzen 5000 系 CPU 与 Navi 2X 系显卡。**
>
> **即使用 AMD CPU + AMD 独显 GPU 的设备。**

## 简介

本项目提供微星 B350M MORTAR 主板的 OpenCore EFI 配置，专为 AMD Ryzen 平台优化。EFI 基于 OpenCore `1.0.5` 版本构建，目标是为用户提供一个稳定、高效、功能完善的黑苹果体验，最高支持 `macOS Sequoia 15.7`。

理论上，采用同代 Ryzen 处理器和 Navi 核心显卡的配置均可使用，其他硬件请根据实际情况自行修改。

### 预览

- 关于本机

![2025-08-13 23.16.11_compressed.png](https://s2.loli.net/2025/08/13/xZ5RYIHwJyMTSoe.png)

- 桌面截图

![2025-08-13 23.31.16_compressed.png](https://s2.loli.net/2025/08/13/nANvzGVxZSTFyP5.png)

## 功能状态

| 功能                     | 状态       | 备注                                                          |
| :----------------------- | ---------- | ------------------------------------------------------------- |
| ✅**GPU 加速**           | `正常`     | Navi 核心显卡硬件加速与视频硬解 (H.264/HEVC) 均正常。         |
| ✅**板载声卡 / 网卡**    | `正常`     | 使用 `AppleALC` 与 `RealtekRTL8111` 驱动。                    |
| ✅**App Store / iCloud** | `正常`     | 正确生成并配置三码后，正常登录使用。                          |
| ✅**HDMI 音视频输出**    | `正常`     | 在显示器上即插即用。                                          |
| ✅**睡眠与唤醒**         | `正常`     | 正常唤醒，如果异常请重新定制 USB 端口或参考后文 `修复睡眠`。  |
| ✅**USB 端口**           | `正常`     | 已提供基础 USB 映射，但建议根据自己的机箱和使用习惯重新定制。 |
| ✅**Apple Music**        | `半正常`   | 开启无损音质会导致无声音输出，等待后续解决方案。              |
| ❌**Apple TV+**          | `无法使用` | 这是 AMD 平台常见的 DRM 问题，等待后续解决方案。              |
| ❔**蓝牙 / Wi-Fi**       | `未测试`   | 由于主板无无线网卡模块，暂时无法测试。                        |

## 硬件配置

| 硬件   | 型号                        |
| :----- | :-------------------------- |
| 主板   | 微星 B350M MORTAR           |
| 处理器 | AMD Ryzen™ 5 5600           |
| 显卡   | AMD Radeon RX 6750 GRE 12GB |
| 内存   | 玖合 星舞 32G 3200MHz DDR4  |

## ⚠️ 免责声明

本项目仅为技术爱好者学习和研究之用，所有文件均来自网络。使用者需自行承担因使用此 EFI 配置所带来的任何风险，包括但不限于数据丢失、硬件损坏、法律纠纷等。本人不对任何可能产生的问题负责。

**在进行任何操作前，请务必备份你的所有重要数据！**

## 快速使用指南

详细的安装过程请参考 OpenCore 官方文档或社区优秀教程。

1. **下载 EFI**

   - 请前往本项目的 **[Releases 页面](https://github.com/VenenoSix24/MSI-B350M-MORTAR-Hackintosh-OpenCore1.0.2-EFI/releases)** 下载最新版本的 EFI 文件。

2. **BIOS 设置**

   - BIOS 版本参考: `7A37v1O7`

   |      **选项**      |    **状态**     |
   | :----------------: | :-------------: |
   |     SATA Mode      |    选择 AHCI    |
   | Above 4G Decoding  | 禁用 / Disabled |
   | EHCI/XHCI Hand-off | 启用 / Enabled  |
   |        SVM         | 启用 / Enabled  |
   |        CSM         | 禁用 / Disabled |
   |    Secure Boot     | 禁用 / Disabled |
   |    Serial Port     | 禁用 / Disabled |
   |   Parallel Port    | 禁用 / Disabled |

   > **重要**：如果开启 **Above 4G Decoding**，**必须**把配置文件 `boot-args` 项中的 `npci=0x3000` 参数删除。或者主板中禁用该项，保留启动参数，二选一即可。
   >
   > **注意：**经测试，开启 **Above 4G Decoding** 并删除 `npci=0x3000` 参数后，如果 EFI 设置 **ResizeAppleGpuBars** 的值为 **0** ，睡眠唤醒会导致设备重启，目前原因不明。

3. **配置 config.plist**

   - **i. 使用 Plist 编辑器打开 EFI 文件**

     **[OCAuxiliaryTools](https://github.com/ic005k/OCAuxiliaryTools)**

     **[OpenCore Configurator](https://mackie100projects.altervista.org/opencore-configurator/)**

   - **ii. 修改 CPU 核心数**

     - 在 `Kernel -> Patch` 中找到四个 `algrey - Force cpuid_cores_per_package` 补丁。
     - 根据你的 CPU 物理核心数，参考下表修改补丁中的**十六进制值**。例如 6 核 `06`，8 核 `08`。
     - `B8 00 0000 0000` -> `B8 06 0000 0000`
     - `BA 00 0000 0000` -> `BA 06 0000 0000`
     - `BA 00 0000 0090` -> `BA 06 0000 0090`
     - `BA 00 0000 00` -> `BA 06 0000 00`

   | **CPU 核心** | **十六进制值** |
   | :----------: | :------------: |
   |     4 核     |      `04`      |
   |     6 核     |      `06`      |
   |     8 核     |      `08`      |
   |    12 核     |      `0C`      |
   |    16 核     |      `10`      |
   |    24 核     |      `18`      |
   |    32 核     |      `20`      |

   - **iii. 生成并替换三码**
     - **此步骤对 iCloud、iMessage 等苹果服务至关重要，请勿使用 EFI 中预留的默认值！**
     - 使用 [GenSMBIOS](https://github.com/corpnewt/GenSMBIOS) 或者其他工具（[OCAuxiliaryTools](https://github.com/ic005k/OCAuxiliaryTools)、[OpenCore Configurator](https://mackie100projects.altervista.org/opencore-configurator/)），选择 `Generate SMBIOS`，机型选择 `MacPro7,1` 来生成你自己的序列号、主板序列号和 SmUUID。
     - 前往苹果官网验证序列号的“无效性”，[进入官网](https://checkcoverage.apple.com/?locale=zh_CN) ，粘贴序列号，进行查询
     - 将生成的值依次填入 `config.plist` 的 `PlatformInfo -> Generic` 路径下。

4. **开始安装**

   - 将配置好的 `EFI` 文件夹完整复制到 macOS 安装分区（安装 U 盘或硬盘 ESP 分区）中，替换掉原有的内容。
   - 具体安装步骤请参考该 [**视频**](https://www.bilibili.com/video/BV1Ps421M7NZ) 的安装部分。

## 安装后调优

### 1. 修复睡眠

如果你的系统无法正常睡眠或唤醒，通常是 USB 端口问题。请参考 **[国光的 USB 定制教程](https://apple.sqlsec.com/6-实用姿势/6-1/)** 来创建你自己的 USB 映射。若问题依旧，可参考 **[官方睡眠修复文档](https://dortania.github.io/OpenCore-Post-Install/universal/sleep.html)**。

### 2. 开启 HiDPI

为了获得细腻显示效果，可以使用 **[one-key-hidpi](https://github.com/xzhih/one-key-hidpi)** 项目。 在终端中运行以下命令，按提示操作即可：

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/xzhih/one-key-hidpi/master/hidpi.sh)"
```

### 3. PAT 补丁切换

本 EFI 默认启用 `Shaneee` 的 PAT 补丁以获得更好的 GPU 性能。如果你遇到 DP/HDMI 音频输出问题或使用的是 NVIDIA 显卡，可以切换到兼容性更好的 `Algrey` 补丁。

- **路径**：`config.plist` -> `Kernel` -> `Patch`
- **操作**：搜索 `mtrr_update_action`，禁用 Shaneee 的补丁并启用 Algrey 的。**切勿同时启用两个！**

|       **Shaneee's**        |      **Algrey's**      |
| :------------------------: | :--------------------: |
|      更好的 GPU 性能       |   标准性能/兼容模式    |
|  可能不适用于 NVIDIA GPU   |      兼容所有 GPU      |
| HDMI / DP 音频可能无法工作 | HDMI / DP 音频正常工作 |
|      ✅ **默认启用**       |    ❌ **默认禁用**     |

### 4. Adobe 及 MKL 程序修复

部分 Adobe 应用和依赖 Intel MKL 库的程序在 AMD 平台上无法正常运行。

- **Adobe 修复**：运行 **[此修复脚本](https://github.com/VenenoSix24/MSI-B350M-MORTAR-Hackintosh-OpenCore-EFI/tree/main/Resource/adobe_patch.sh)**。
- **MKL 修复**：运行 **[此修复脚本](https://github.com/VenenoSix24/MSI-B350M-MORTAR-Hackintosh-OpenCore-EFI/tree/main/Resource/ryzen_patch.sh)**。
- 运行后**重启**查看效果。

### 5. 修改 CPU 处理器名称

- **路径**：`config.plist` -> `NVRAM` -> `4D1FDA02-38C7-4A6A-9CC6-4BCCA8B30102`
- **操作**：找到 `cpu-name` 项，将其值 `AMD Ryzen™ 5 5600` 修改为你想要的名称。
- **生效**：修改后**重启并重置 NVRAM**，修改的处理器名称即可显示。

## 如何更新 EFI

1. **备份**你当前正在使用的 EFI 文件夹，尤其是你的 `config.plist` 文件。
2. 下载最新的 Release 版本。
3. 使用 `config.plist` 对比工具（如 `OCAuxiliaryTools` 的对比功能）将你旧 `config.plist` 中的个性化设置（如三码、CPU 核心数等）迁移到新版的 `config.plist` 中。
4. 替换整个 EFI 文件夹。
5. 重启并重置 NVRAM。

## FAQ / 常见问题解答

**Q1: 安装后没有声音怎么办?**

A:

1. 检查 `config.plist` -> `NVRAM` -> `boot-args` 中是否包含 `alcid=xx` 参数。对于本主板，`alcid=1` 或 `alcid=7` 通常是有效的。
2. 前往 `系统设置 -> 声音 -> 输出`，确认输出设备是否已正确选择。

**Q2: 更新了 Kexts 或者 OpenCore 后无法启动了?**

A: 永远记得在做任何修改前**备份你能够正常工作的 EFI**。无法启动时，请使用备份的 EFI 恢复系统，然后仔细排查新旧 `config.plist` 的差异，并确保所有 Kexts、驱动和 OpenCore 版本相互兼容。

## 更新日志

**v2025.08.14**

- 更新 OpenCore 版本至: v1.0.5
- 系统支持：最高支持到 `macOS Sequoia 15.7`
- 默认启用图形化 OC 引导界面，主题位于 `Resources` 文件夹下
- Kexts 均更新至最新版，为追求稳定， `AppleALC` 依旧使用 v1.9.2 修改版

> 由于 Tahoe Beta 版稳定性问题，暂未在物理机上测试，所以，**对 macOS 26 Tahoe 的支持性未知**

**v2025.08.13**

- 当前 OpenCore 版本: v1.0.2
- 系统支持：最高支持到 `macOS Sequoia 15.6`
- **注意:** 默认添加 `npci=0x3000`参数，请关闭 `Above 4G Decoding`选项（或删除 `npci=0x3000`参数）

**v2025.05.21**

- 删除不必要的文件
- 更新 Lilu 和 NootRX
- 调整 config.plist 配置
- 更新 README.md 文档

**v2024.10.21**

- OpenCore 升级至 1.0.2 版本
- 同步更新所有 Kexts 至最新版
- 针对 macOS Sequoia 15 进行初步适配

## 鸣谢与资源

> 感谢所有为 Hackintosh 社区做出贡献的开发者和先行者！

- **教程与社区**: [国光酱](https://apple.sqlsec.com/), [黑果小兵](https://blog.daliansky.net/), [Dortania&#39;s OpenCore Install Guide](https://dortania.github.io/OpenCore-Install-Guide/)
- **核心项目**: [OpenCorePkg](https://github.com/acidanthera/OpenCorePkg), [AMD_Vanilla](https://github.com/AMD-OSX/AMD_Vanilla)
- **工具**: [ProperTree](https://github.com/corpnewt/ProperTree), [GenSMBIOS](https://github.com/corpnewt/GenSMBIOS), [OCAuxiliaryTools](https://github.com/ic005k/OCAuxiliaryTools), [OpenCore Configurator](https://mackie100projects.altervista.org/opencore-configurator/)
- **补丁与脚本**: [ryzen-hackintosh](https://github.com/mikigal/ryzen-hackintosh), [one-key-hidpi](https://github.com/xzhih/one-key-hidpi)
