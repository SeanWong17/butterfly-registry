# 数据来源与统计口径

核验日期：2026-07-19。

## 结论

原页面的汇总值无法由物种条目复算：数据实际为 CITES 附录 II 45 条、中国国家二级 14 条，但页面分别写成 47 和 16。中国国家二级保护蝶类还漏标 4 条、漏收 5 条。

修正后的本页口径为：

| 指标 | 数量 |
| --- | ---: |
| 本页受保护物种条目 | 58 |
| CITES 附录 I 覆盖条目 | 3 |
| CITES 附录 II 覆盖条目 | 48 |
| 中国国家一级保护条目 | 1 |
| 中国国家二级保护条目 | 23 |

“本页受保护物种条目”是本项目所收 `rank=species` 条目的数量，不是全球受保护蝴蝶总数。

## 本次修正

中国名录中已经存在于项目、但漏标国家二级保护的 4 种：

- `Troides amphrysus`
- `Troides criton`
- `Troides cuneifera`
- `Troides haliphron`

项目原先漏收的 5 种中国国家二级保护蝶类：

- `Bhutanitis pulchristriata`
- `Losaria coon`
- `Parnassius imperator`
- `Maculinea arionides`
- `Phengaris xiushani`

同时按中国法定名录修正了荧光裳凤蝶、双尾凤蝶、不丹尾凤蝶和玄裳尾凤蝶等中文名，并保留常见旧名供搜索。

## 分类口径

中国2021年名录将 `Bhutanitis nigrilima`、`B. yulongensis` 和 `B. pulchristriata` 作为独立条目。CITES Checklist采用更合并的标准命名：前两者列为 `B. thaidina` 的异名，第三个名称未单列；但 `Bhutanitis spp.` 整属列入CITES附录II。因此页面的“CITES II 48”表示本页有48个条目受CITES列名覆盖，不表示CITES承认48个彼此独立的物种。

## 权威来源

- [CITES Checklist of Species](https://checklist.cites.org/)：CITES附录等级、属级列名和标准命名。
- [国家重点保护野生动物名录（2021年第3号公告）](https://www.gov.cn/zhengce/2021-02/05/content_5727412.htm)：中国法定保护等级。
- [国家重点保护野生动物名录 PDF](https://www.gov.cn/zhengce/2021-02/05/5727412/files/7bf5c0b21f554df497f370068f027ddb.pdf)：蝶类位于第35至36页。
- [GBIF Backbone Taxonomy](https://www.gbif.org/species/search)：补充核对学名、命名人和异名关系。

本轮只对法定保护等级、CITES覆盖范围、相关分类口径和汇总统计作系统核验；物种描述中的全部形态、分布和历史IUCN评估并未逐句重做专题审校。

## 第二轮专题审校

在图片重绘前，又按GBIF接受名、公开标本图版和原始描述对容易串种的条目做了定向核查，并修正以下确认问题：

- `Troides dohertyi`的核心分布改为塔劳群岛，不再误写为苏门答腊北部和尼亚斯岛。
- `Troides staudingeri`的分布改为马鲁古南部岛链，不再误写为菲律宾棉兰老岛。
- `Troides vandepolli`改为苏门答腊和爪哇均有地理型，不再写成爪哇单岛特有种。
- `Troides cuneifera`改为山地森林种，并注明楔斑可退化，不能单凭粗黑楔斑定种。
- `Troides miranda`的蓝色斜光鳞辉改到雄蝶前翅；`T. haliphron`改为后翅大部黑色、仅留狭窄金斑带。
- `Troides hypolitus`补充雌蝶黄、银灰镶嵌后翅及黑心斑，避免写成普通黑黄裳凤蝶。
- `Trogonoptera brookiana`和`T. trojana`修正后翅绿色区域差异，并回改后者翼展资料。
- `Papilio chikae`的后翅关键纹样改为蓝绿色金属带，不再误写成白斑。
- `Sasakia funebris`改为具有蓝黑至蓝紫鳞光，而不是完全没有紫色鳞片。
- `Phengaris xiushani`模式产地改为云南怒江，不再把种名解释成重庆秀山产地。
- `Atrophaneura jophon`和`A. pandiyana`保留名录组合，同时注明GBIF接受名为`Pachliopta`组合。
- `Sasakia pulcherrima`改用GBIF来源记录作者`Chou & Li`，并明确其Backbone未匹配及分类地位高风险。
- `Ornithoptera arfakensis`保留近期资料使用的拆分种概念，同时注明GBIF Backbone尚无物种匹配；CITES保护依据仍是`Ornithoptera spp.`属级列名。

专题核查还参考了以下资料：

- [GBIF Species API](https://techdocs.gbif.org/en/openapi/v1/species)：接受名、异名、作者及Backbone匹配状态。
- [iNaturalist的Ornithoptera arfakensis条目](https://www.inaturalist.org/taxa/1641759-Ornithoptera-arfakensis)：GBIF尚未收录的拆分分类概念；仅用于说明本页保留该条目的依据。
- [Wikimedia Commons物种分类](https://commons.wikimedia.org/wiki/Category:Lepidoptera)：公开展翅标本与历史图版的形态交叉核对；具体图片只作重绘参考，不直接作为本项目成品。
- Seitz, *The Macrolepidoptera of the World*, vol. 9：`Troides`历史形态比较；现代分类仍以GBIF与CITES口径为准。
- [Phengaris xiushani原始描述](https://doi.org/10.3897/zookeys.48.415)：模式产地、命名解释和诊断形态。

这仍不是对58个条目的完整现代分类专著式修订。页面保留中国法定名录中的独立条目，因此个别名称与全球数据库的合并分类并存；相应条目已用`taxonomyNote`明示口径。

## 第三轮分类与基础资料审校

本轮针对亚科层级、IUCN状态、命名人和分布做了定向复核：

- 将包含`Bhutanitis`和`Luehdorfia`的锯凤蝶族`Zerynthiini`从凤蝶亚科移至绢蝶亚科；总条目数不变，两个亚科分别为44条和10条。
- 将`Ornithoptera meridionalis`、`O. tithonus`、`Atrophaneura jophon`和`Papilio chikae`的IUCN状态分别修正为NT、LC、EN和EN。
- 按接受名组合及括号规则修正10条命名人记录：`O. alexandrae`、`O. croesus`、`O. euphorion`、`O. richmondia`、`O. goliath`、`O. paradisea`、`O. tithonus`、`O. rothschildi`、`Troides darsius`和`T. plato`。
- 补全`Teinopalpus aureus`在越南、老挝及`T. imperialis`在越南北部的分布；`Bhutanitis ludlowi`仅保留不丹和印度阿鲁纳恰尔邦的可靠记录；明确`O. victoriae`的所罗门群岛地理区包含布干维尔岛。

本轮直接核对的权威记录：

- IUCN Red List：[`O. meridionalis`](https://www.iucnredlist.org/species/15519/91163570)、[`O. tithonus`](https://www.iucnredlist.org/species/15524/88690720)、[`A. jophon`](https://www.iucnredlist.org/species/197314/122602081)、[`P. chikae`](https://www.iucnredlist.org/species/15986/5341006)。
- GBIF分类记录：[`Bhutanitis`](https://api.gbif.org/v1/species/216627930)、[`Luehdorfia`](https://api.gbif.org/v1/species/216627958)，两属的父级均为`Parnassiinae`。
- Species+分布记录：[`Teinopalpus aureus`](https://speciesplus.net/#/taxon_concepts/8537)、[`T. imperialis`](https://speciesplus.net/#/taxon_concepts/10454)；前者在老挝的补充记录参考[2019年生境研究](https://doi.org/10.1016/j.biocon.2019.03.029)。
- 狭域分布资料：IUCN对[`Bhutanitis ludlowi`](https://www.iucnredlist.org/species/2796/170536676)和[`Ornithoptera victoriae`](https://www.iucnredlist.org/species/91183843/91183900)的评估。

图片参考、AI重绘方式和高风险图像条目另见[`IMAGE_SOURCES.md`](./IMAGE_SOURCES.md)。

## 验证

```bash
node --test tests/*.test.js
```

测试会复算全部统计、核对中国名录的1个一级和23个二级条目、检查重复学名/ID、验证每个分类节点的小计，并确认58个物种均有同名的1024×640 JPEG图片。
