# 图片来源、重绘与使用说明

核验与生成日期：2026-07-19。

## 成品口径

`images/`中的图片用于本项目的物种导览展示，统一整理为1024×640 JPEG、白色背景、单只成蝶背面展翅图。新增图片均为AI重绘或基于形态资料的AI复原，不是原参考照片的原样转载，也不应替代模式标本、检索表或专家鉴定。

本轮使用`gpt-image-2`，经Wuzu API的`/v1/images/edits`和`/v1/images/generations`端点生成。访问凭据不写入项目。重绘提示统一要求去除原版面中的文字、标签、标尺、水印、装饰和标本针，并保留物种诊断花纹、完整翅尖、触角、腹部与尾突。

最终58张成品按来源与处理方式分为：项目既有图片14张、本地参考图重绘20张、公开实拍参考重绘1张、资料驱动复原23张（14+20+1+23=58）。

## 项目既有图片

以下14张`Ornithoptera`图片在本轮工作前已存在。现有文件没有完整的外部作者、发布页和许可元数据，因此只能暂记为“项目既有本地资产”，不能据此推断原始著作权状态；工作期间使用的原始图像目录已在最终验收后按项目要求删除：

`Ornithoptera aesacus`、`O. alexandrae`、`O. arfakensis`、`O. chimaera`、`O. croesus`、`O. euphorion`、`O. goliath`、`O. meridionalis`、`O. paradisea`、`O. priamus`、`O. richmondia`、`O. rothschildi`、`O. tithonus`、`O. victoriae`。

## 本地参考图重绘

以下20张新增图使用用户提供的本地参考资料，经物种名纠错、裁剪和白底参考板整理后提交到`/v1/images/edits`重绘。原截图中的外部发布者与许可信息并不完整，项目不把这些截图声明为原创；工作期间使用的原文件和中间参考板已在最终验收后按项目要求删除：

`Troides aeacus`、`T. hypolitus`、`T. magellanus`、`T. oblongomaculatus`、`T. vandepolli`、`T. cuneifera`、`T. criton`、`T. haliphron`、`T. helena`、`Trogonoptera brookiana`、`Trogonoptera trojana`、`Teinopalpus aureus`、`Teinopalpus imperialis`、`Losaria coon`、`Bhutanitis lidderdalii`、`B. thaidina`、`B. mansfieldi`、`B. ludlowi`、`Luehdorfia chinensis`、`Parnassius apollo`。

参考资料中发现并纠正了4处明显版面错误：原`413`页眉误写为`Troides vandepolli`，主体实际是`T. oblongomaculatus`；原`416`页眉不是主体学名，主体为`T. criton`；原`417`的`T. haliphron`拼写错误；原`421`右下图实际为`Bhutanitis thaidina`而不是重复标注的`B. mansfieldi`。

后续补充的两张参考图分别用于`Losaria coon`和`Teinopalpus imperialis`。前者纠正了旧复原图的腹部、后翅白斑、红色缘斑和锤状尾突；后者按参考标本保留褐色前翅外区、绿色中区、金黄后翅斑和完整长尾。原截图可见的小红书账号标识分别为`95369497893`和`6085001825`，但作者身份和许可尚未独立核实，后续仍需补充原始发布页。

技术整理补充：`O. alexandrae`、`O. chimaera`、`O. croesus`、`O. rothschildi`及`Troides magellanus`的成品没有重绘物种纹样，仅将与画布边缘连通的浅灰背景清理为白色，并等比例缩放、居中到统一画布；原有蝶体及翅纹保持不变。

## 公开实拍参考重绘

`Sasakia funebris`最终成品经`/v1/images/edits`使用同一实拍个体的两帧照片作形态参考，保留四翅外侧大量细长银白/浅蓝平行纹、蓝黑鳞光及前翅基部红色楔斑，并重绘为完整展翅白底图。参考记录为[GBIF occurrence 4908383836](https://www.gbif.org/occurrence/4908383836)，对应iNaturalist照片[407255541](https://www.inaturalist.org/photos/407255541)和[407255567](https://www.inaturalist.org/photos/407255567)；创作者为`ddmdragonflies`，参考照片采用[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)许可。项目成品是AI重绘结果，不是上述原照片的转载或替代版本。

## 资料驱动复原

以下23张没有采用图片输入，而是根据公开分类、标本图版和原始描述提炼诊断提示，经`/v1/images/generations`生成：

| 物种 | 主要核查依据 |
| --- | --- |
| `Troides amphrysus`、`T. miranda`、`T. andromache`、`T. minos`、`T. rhadamantus`、`T. darsius` | GBIF接受名；Wikimedia Commons展翅标本；Seitz第9卷形态比较 |
| `Troides riedeli`、`T. plato`、`T. staudingeri`、`T. dohertyi`、`T. prattorum`、`T. plateni` | GBIF接受名；Wikimedia Commons展翅标本；Seitz第9卷形态比较 |
| `Atrophaneura jophon`、`A. pandiyana` | GBIF接受名`Pachliopta jophon`、`P. pandiyana`；公开成蝶照片 |
| `Bhutanitis yulongensis`、`B. nigrilima` | 中国2021年法定名录条目；GBIF/CITES所采用的`B. thaidina`合并分类 |
| `Bhutanitis pulchristriata` | 中国2021年法定名录条目；GBIF名称记录；`B. mansfieldi pulchristriata`亚种处理资料 |
| `Papilio chikae` | [GBIF 1937934](https://www.gbif.org/species/1937934)；[公开雄蝶标本](https://commons.wikimedia.org/wiki/File:Papilio_chikae_male.JPG) |
| `Papilio homerus` | [GBIF 1937910](https://www.gbif.org/species/1937910)；公开雌雄成蝶资料 |
| `Parnassius imperator` | [GBIF 1938659](https://www.gbif.org/species/1938659)；[公开标本图](https://commons.wikimedia.org/wiki/File:Parnassius_imperator_ulster.jpg) |
| `Sasakia pulcherrima` | [GBIF来源名称记录307395272](https://www.gbif.org/species/307395272)，该记录带`BACKBONE_MATCH_NONE` |
| `Maculinea arionides` | [1887年原始图版](https://commons.wikimedia.org/wiki/File:ArionidesStgr1887MFUpUn.jpg)；GBIF名称与组合名记录 |
| `Phengaris xiushani` | [ZooKeys原始描述](https://doi.org/10.3897/zookeys.48.415)；[GBIF 8768350](https://www.gbif.org/species/8768350) |

`Troides`条目的逐种名称核查入口为[GBIF](https://www.gbif.org/species/search)和[Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:Troides)。历史图版只用于形态交叉比较，现代分类和保护等级仍以GBIF、CITES及中国法定名录为准。

## 高风险条目

`Ornithoptera arfakensis`采用近期资料中的拆分种概念，但GBIF Backbone尚无对应物种匹配；其既有图片应按这一分类口径理解，不能视为该拆分获得全球数据库一致接受的证据。

`Bhutanitis yulongensis`和`B. nigrilima`在中国法定名录中分列，但GBIF和CITES采用的标准命名将其并入`B. thaidina`；`B. pulchristriata`亦有独立种和亚种两种处理。三张图因此采用保守近缘形态，不人为创造未经模式图支持的强差异。

`B. lidderdalii`、`B. thaidina`、`B. mansfieldi`和`B. ludlowi`的本地参考来自一张低分辨率示意图，细微亚种和性别特征的可靠性低于馆藏标本照片；成品保留了可辨识的大斑纹和尾突布局，但仍建议由鳞翅目专家复核。

`Sasakia pulcherrima`的作者、独立种地位及可能的自然杂交来源存在冲突；其图片只是按已报道雄型做的高风险复原。使用者不应把这些生成图视为上述分类争议的证据。

所有AI图片仍可能出现细微翅脉或斑纹误差。若用于科研、鉴定、出版或执法，应回到具体标本、原始描述和权威数据库复核。

## 勘误与参考图

欢迎指出成品中的纹样、性别、亚种、裁切或其他识别问题。提交参考图时，请尽量同时提供原始发布页、作者或摄影者、许可协议、物种学名，以及已知的性别、亚种和拍摄地点等信息，便于核验并避免近缘种误用。项目采用参考资料进行修正时会继续保留对应的来源、作者与许可声明。
