// data.js - 受保护蝴蝶物种数据
const BUTTERFLY_DATA = {
  "id": "ord_001",
  "rank": "order",
  "scientificName": "Lepidoptera",
  "chineseName": "鳞翅目",
  "description": "鳞翅目是昆虫纲中仅次于鞘翅目的第二大目，包括蝴蝶和蛾类。其名称源自希腊语lepis（鳞片）和pteron（翅），成虫具有两对覆盖鳞片的膜质翅和虹吸式口器。全球已知约180,000种，其中蝴蝶约占17,500种。该目昆虫在生态系统中担任重要的传粉者角色，同时也是生物多样性监测的指示类群。",
  "statistics": null,
  "methodology": {
    "lastVerified": "2026-07-19",
    "statisticsUnit": "catalogSpeciesEntries",
    "scopeNote": "统计对象为本页 rank=species 的名录条目，不代表全球所有受保护蝴蝶的物种总数。CITES 属级列名覆盖的中国名录条目按本页条目计入，并保留分类口径说明。",
    "sources": [
      {
        "name": "CITES Checklist of Species",
        "url": "https://checklist.cites.org/",
        "scope": "CITES附录等级与标准命名"
      },
      {
        "name": "国家重点保护野生动物名录（2021年第3号公告）",
        "url": "https://www.gov.cn/zhengce/2021-02/05/content_5727412.htm",
        "scope": "中国国家一级、二级保护等级"
      },
      {
        "name": "GBIF Backbone Taxonomy",
        "url": "https://www.gbif.org/species/search",
        "scope": "补充核对学名与异名"
      },
      {
        "name": "IUCN Red List",
        "url": "https://www.iucnredlist.org/",
        "scope": "核对页面明确记录的受威胁等级与评估信息"
      },
      {
        "name": "Species+",
        "url": "https://speciesplus.net/",
        "scope": "补充核对国际贸易管控、分布与分类概念"
      }
    ]
  },
  "children": [
    {
      "id": "fam_001",
      "rank": "family",
      "scientificName": "Papilionidae",
      "chineseName": "凤蝶科",
      "description": "凤蝶科全球约有550种，成员通常体型较大，许多物种后翅具有尾突。幼虫具有臭角（osmeterium），受惊时会从前胸背板伸出并释放刺激性气味。该科包含亚历山大鸟翼凤蝶等大型蝶类，其中多个属或物种因贸易与保护需求被列入CITES附录。",
      "protectedSpeciesCount": 54,
      "children": [
        {
          "id": "subfam_001",
          "rank": "subfamily",
          "scientificName": "Papilioninae",
          "chineseName": "凤蝶亚科",
          "description": "凤蝶亚科是凤蝶科的核心类群，本页收录裳凤蝶族、喙凤蝶族和凤蝶族的受保护条目。该亚科成员分布广泛，从热带雨林到山地森林均有分布。其幼虫多以马兜铃科、芸香科、樟科等植物为寄主，部分物种因此具有毒性或不适口性，形成了复杂的拟态关系。",
          "protectedSpeciesCount": 44,
          "children": [
            {
              "id": "tribe_001",
              "rank": "tribe",
              "scientificName": "Troidini",
              "chineseName": "裳凤蝶族",
              "description": "裳凤蝶族包含了凤蝶科中体型最大的成员，俗称'鸟翼凤蝶类'。该族成员主要分布于南亚、东南亚至澳大拉西亚地区，以马兜铃科植物为幼虫寄主。鸟翼凤蝶属、裳凤蝶属、红颈凤蝶属以及本页列出的两种曙凤蝶受CITES管控；锤尾凤蝶则依据中国国家重点保护名录收录。",
              "protectedSpeciesCount": 40,
              "children": [
                {
                  "id": "gen_001",
                  "rank": "genus",
                  "scientificName": "Ornithoptera",
                  "chineseName": "鸟翼凤蝶属",
                  "description": "鸟翼凤蝶属是世界上体型最大的蝴蝶类群，属名源自希腊语ornis（鸟）和pteron（翅），形容其翼展之巨大。本页按包含阿法克鸟翼凤蝶拆分概念的口径收录14个物种条目；全球数据库对该拆分的接受程度不同。各条目分布于新几内亚及周边岛屿、澳大利亚北部和所罗门群岛的热带雨林中。雄蝶通常具有鲜艳的绿色、蓝色或金黄色，雌蝶体型更大但色彩较暗淡。全属被列入CITES管控，其中亚历山大鸟翼凤蝶为CITES附录I物种，其余由附录II属级列名覆盖。",
                  "protectionNote": "全属受CITES管控",
                  "protectedSpeciesCount": 14,
                  "children": [
                    {
                      "id": "subgen_001",
                      "rank": "subgenus",
                      "scientificName": "Aetheoptera",
                      "chineseName": "Aetheoptera亚属",
                      "description": "Aetheoptera亚属为鸟翼凤蝶属的单型亚属，仅包含维多利亚鸟翼凤蝶一种。该亚属成员分布于所罗门群岛，是该地区的特有类群。",
                      "children": [
                        {
                          "id": "sp001",
                          "rank": "species",
                          "scientificName": "Ornithoptera victoriae",
                          "chineseName": "维多利亚鸟翼凤蝶",
                          "author": "(Gray, 1856)",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": null,
                            "managementNote": "按CITES附录II履约管理"
                          },
                          "description": "维多利亚鸟翼凤蝶特有于所罗门群岛地理区，以英国维多利亚女王命名。雄蝶翼展约15-19厘米，前翅黑色带有绿色光泽，后翅具有鲜艳的金绿色斑纹。雌蝶体型更大，翅膀底色为褐色，带有白色和黄色斑纹。其分布涵盖所罗门群岛国多个岛屿以及巴布亚新几内亚的布干维尔岛。",
                          "distribution": "所罗门群岛地理区（所罗门群岛国及巴布亚新几内亚布干维尔岛）",
                          "remarks": "特有于所罗门群岛生物地理区，分布亦包括巴布亚新几内亚的布干维尔岛"
                        }
                      ]
                    },
                    {
                      "id": "subgen_002",
                      "rank": "subgenus",
                      "scientificName": "Straatmana",
                      "chineseName": "Straatmana亚属",
                      "description": "Straatmana亚属同样为单型亚属，仅包含亚历山大鸟翼凤蝶。该物种是世界上最大的蝴蝶，被列入CITES附录I，享有最高级别的国际贸易保护。",
                      "children": [
                        {
                          "id": "sp002",
                          "rank": "species",
                          "scientificName": "Ornithoptera alexandrae",
                          "chineseName": "亚历山大鸟翼凤蝶",
                          "author": "(Rothschild, 1907)",
                          "protectionLevel": {
                            "cites": "I",
                            "chinaLevel": null,
                            "managementNote": "按CITES附录I履约管理"
                          },
                          "description": "亚历山大鸟翼凤蝶是世界上最大的蝴蝶，以英国亚历山德拉王后命名。雌蝶翼展可达25-31厘米，翅膀圆润，底色褐色带有白色斑纹。雄蝶翼展约20厘米，较雌蝶纤细，前翅狭长呈黑色，后翅为明亮的蓝绿色，腹部鲜黄色。该物种仅分布于巴布亚新几内亚的北部省一小片热带雨林中，栖息地面积不足100平方公里。由于极度稀有和栖息地丧失（主要因油棕种植园扩张和火山活动），被IUCN列为濒危（EN）。",
                          "distribution": "巴布亚新几内亚北部省特有",
                          "remarks": "世界最大蝴蝶，CITES附录I物种，完全禁止商业性国际贸易",
                          "iucnStatus": "EN（濒危）"
                        }
                      ]
                    },
                    {
                      "id": "subgen_003",
                      "rank": "subgenus",
                      "scientificName": "Ornithoptera",
                      "chineseName": "Ornithoptera亚属（指名亚属）",
                      "description": "指名亚属Ornithoptera包含了分布最广、亚种最多的鸟翼凤蝶类群。该亚属成员从摩鹿加群岛延伸至澳大利亚东北部，适应性较强，是鸟翼凤蝶中相对常见的类群，但仍全部受CITES附录II保护。",
                      "children": [
                        {
                          "id": "sp003",
                          "rank": "species",
                          "scientificName": "Ornithoptera priamus",
                          "chineseName": "绿鸟翼凤蝶",
                          "author": "(Linnaeus, 1758)",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": null,
                            "managementNote": "按CITES附录II履约管理"
                          },
                          "description": "绿鸟翼凤蝶是鸟翼凤蝶属的模式种，也是分布最广、亚种最多的种类。雄蝶翼展约15-19厘米，前翅黑色带有绿色反光，后翅大部分为鲜艳的翠绿色或蓝绿色，具有黑色边缘和斑点。雌蝶较大，翅面褐色带有白色斑纹。该物种的色型变异丰富，不同产地的亚种在绿色的深浅和蓝色成分上有明显差异。",
                          "distribution": "摩鹿加群岛、新几内亚、所罗门群岛、澳大利亚东北部",
                          "remarks": "包含多个地理亚种，雄蝶的绿色与蓝绿色比例具有明显地理变异"
                        },
                        {
                          "id": "sp004",
                          "rank": "species",
                          "scientificName": "Ornithoptera croesus",
                          "chineseName": "红鸟翼凤蝶",
                          "author": "Wallace, 1859",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": null,
                            "managementNote": "按CITES附录II履约管理"
                          },
                          "description": "红鸟翼凤蝶特有于印度尼西亚北马鲁古的巴占群岛。雄蝶翼展约16厘米，前翅黑色并带绿色光泽，后翅为金黄色至橙黄色；雌蝶体型较大，翅面褐色并具有白色斑纹。该种由阿尔弗雷德·拉塞尔·华莱士于19世纪采集并描述。",
                          "distribution": "印度尼西亚北摩鹿加群岛（巴占群岛）",
                          "remarks": "本项目按独立种处理；部分历史资料将其置于Ornithoptera priamus复合群内"
                        },
                        {
                          "id": "sp005",
                          "rank": "species",
                          "scientificName": "Ornithoptera aesacus",
                          "chineseName": "黄点鸟翼凤蝶",
                          "author": "(Ney, 1903)",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": null,
                            "managementNote": "按CITES附录II履约管理"
                          },
                          "description": "黄点鸟翼凤蝶特有于印度尼西亚奥比岛。雄蝶翼展约14-16厘米，后翅具有黄色斑块，与近缘种常见的宽带状斑纹不同。其已知分布范围局限于单一岛屿，种群状况与当地森林生境相关。",
                          "distribution": "印度尼西亚奥比岛特有",
                          "remarks": "奥比岛特有种，已知分布范围局限"
                        },
                        {
                          "id": "sp006",
                          "rank": "species",
                          "scientificName": "Ornithoptera euphorion",
                          "chineseName": "石冢鸟翼凤蝶",
                          "author": "(Gray, 1853)",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": null,
                            "managementNote": "按CITES附录II履约管理"
                          },
                          "description": "石冢鸟翼凤蝶特有于澳大利亚东北部，是该国翼展最大的本土蝴蝶。雄蝶翼展约14-16厘米，前翅黑色，后翅具有绿色斑区，主要栖息于昆士兰州东北部的热带雨林。部分历史资料将其置于Ornithoptera priamus之下，本项目按独立种处理。",
                          "distribution": "澳大利亚昆士兰州东北部",
                          "remarks": "本项目按独立种处理；部分资料采用Ornithoptera priamus euphorion组合"
                        },
                        {
                          "id": "sp007",
                          "rank": "species",
                          "scientificName": "Ornithoptera richmondia",
                          "chineseName": "里士满鸟翼凤蝶",
                          "author": "(Gray, 1853)",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": null,
                            "managementNote": "按CITES附录II履约管理"
                          },
                          "description": "里士满鸟翼凤蝶分布于澳大利亚新南威尔士州北部至昆士兰州东南部，是鸟翼凤蝶属分布最南的成员。雄蝶翼展约13-15厘米，后翅绿色斑区通常小于石冢鸟翼凤蝶，主要见于亚热带雨林及其边缘。部分资料将其置于Ornithoptera priamus之下，本项目按独立种处理。",
                          "distribution": "澳大利亚新南威尔士州北部至昆士兰州东南部",
                          "remarks": "本项目按独立种处理；部分资料采用Ornithoptera priamus richmondia组合"
                        }
                      ]
                    },
                    {
                      "id": "subgen_004",
                      "rank": "subgenus",
                      "scientificName": "Schoenbergia",
                      "chineseName": "Schoenbergia亚属",
                      "description": "Schoenbergia亚属包含新几内亚高地的大型鸟翼凤蝶，多数成员后翅具有尾突。该亚属物种主要记录于新几内亚山地雨林，其分布与海拔及局地气候条件相关。",
                      "children": [
                        {
                          "id": "sp008",
                          "rank": "species",
                          "scientificName": "Ornithoptera goliath",
                          "chineseName": "歌利亚鸟翼凤蝶",
                          "author": "Oberthür, 1888",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": null,
                            "managementNote": "按CITES附录II履约管理"
                          },
                          "description": "歌利亚鸟翼凤蝶是翼展较大的鸟翼凤蝶之一。雌蝶翼展约20-28厘米，雄蝶约16-20厘米；雄蝶前翅黑色，后翅具有宽阔的黄绿色斑区及黑色边缘。该物种包含多个地理亚种，分布于新几内亚及附近岛屿。",
                          "distribution": "新几内亚岛及周边岛屿",
                          "remarks": "雌蝶记录翼展可达约28厘米，属于大型鸟翼凤蝶"
                        },
                        {
                          "id": "sp009",
                          "rank": "species",
                          "scientificName": "Ornithoptera paradisea",
                          "chineseName": "钩尾鸟翼凤蝶",
                          "author": "Staudinger, 1893",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": null,
                            "managementNote": "按CITES附录II履约管理"
                          },
                          "description": "钩尾鸟翼凤蝶分布于新几内亚山地雨林。雄蝶翼展约14-17厘米，前翅黑色并带绿色光泽，后翅为金黄色或黄绿色，延伸出两条细长尾突；雌蝶体型较大且无同型尾突。",
                          "distribution": "新几内亚岛",
                          "remarks": "雄蝶后翅具有两条细长尾突，可用于同属近缘种的形态对照"
                        },
                        {
                          "id": "sp010",
                          "rank": "species",
                          "scientificName": "Ornithoptera meridionalis",
                          "chineseName": "极乐鸟翼凤蝶",
                          "author": "(Rothschild, 1897)",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": null,
                            "managementNote": "按CITES附录II履约管理"
                          },
                          "description": "极乐鸟翼凤蝶分布于新几内亚南部。雄蝶翼展约14-16厘米，后翅为黄绿色，尾突细长且较钩尾鸟翼凤蝶更窄。IUCN于2018年将其评估为近危（NT），评估资料将栖息地丧失列为主要威胁。",
                          "distribution": "新几内亚岛南部",
                          "remarks": "IUCN近危物种，尾突极细如丝，分布范围局限",
                          "iucnStatus": "NT（近危）"
                        },
                        {
                          "id": "sp011",
                          "rank": "species",
                          "scientificName": "Ornithoptera chimaera",
                          "chineseName": "银鮫鸟翼凤蝶",
                          "author": "(Rothschild, 1904)",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": null,
                            "managementNote": "按CITES附录II履约管理"
                          },
                          "description": "银鮫鸟翼凤蝶分布于新几内亚中部山地。雄蝶翼展约15-18厘米，后翅为黄绿色并具有黑色斑纹和短尾突。现有记录主要来自海拔约1500-2500米的山地云雾林。",
                          "distribution": "新几内亚中部山地",
                          "remarks": "高山物种，栖息于山地云雾林中"
                        },
                        {
                          "id": "sp012",
                          "rank": "species",
                          "scientificName": "Ornithoptera tithonus",
                          "chineseName": "悌鸟翼凤蝶",
                          "author": "de Haan, 1840",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": null,
                            "managementNote": "按CITES附录II履约管理"
                          },
                          "description": "悌鸟翼凤蝶以希腊神话中获得永生但未获永恒青春的特洛伊王子提托诺斯命名。该物种的部分野外生态信息仍较有限，但IUCN 2018年评估为无危（LC）。雄蝶后翅呈黄绿色，翼展约14-16厘米。",
                          "distribution": "新几内亚西部（伊里安查亚）",
                          "remarks": "IUCN无危物种；部分野外生态信息仍较有限",
                          "iucnStatus": "LC（无危）"
                        },
                        {
                          "id": "sp013",
                          "rank": "species",
                          "scientificName": "Ornithoptera rothschildi",
                          "chineseName": "黄绿鸟翼凤蝶",
                          "author": "Kenrick, 1911",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": null,
                            "managementNote": "按CITES附录II履约管理"
                          },
                          "description": "黄绿鸟翼凤蝶以沃尔特·罗斯柴尔德命名，特有于新几内亚西部的阿尔法克山脉。雄蝶翼展约15-17厘米，前翅黑色，后翅具有黄绿色斑区；已知分布集中于该山地系统。",
                          "distribution": "新几内亚阿尔法克山脉特有",
                          "remarks": "阿尔法克山脉特有种，分布范围狭窄"
                        },
                        {
                          "id": "sp014",
                          "rank": "species",
                          "scientificName": "Ornithoptera arfakensis",
                          "chineseName": "阿法克鸟翼凤蝶",
                          "author": "(Joicey & Noakes, 1916)",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": null,
                            "managementNote": "按CITES附录II履约管理"
                          },
                          "citesBasis": "Ornithoptera spp.（CITES附录II属级列名）",
                          "taxonomyNote": "本页采用从Ornithoptera paradisea复合群拆分的Ornithoptera arfakensis概念；iNaturalist将其作为活动物种条目，GBIF Backbone在2026-07-19尚无对应物种匹配。",
                          "description": "阿法克鸟翼凤蝶特有于新几内亚西部阿尔法克山脉。雄蝶后翅具有尾突，与钩尾鸟翼凤蝶在尾突形态和翅纹细节上存在差异。本项目按独立种处理，部分资料将其置于Ornithoptera paradisea复合群内。",
                          "distribution": "新几内亚阿尔法克山脉",
                          "remarks": "本项目按独立种处理；部分资料采用亚种或复合群处理"
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": "gen_002",
                  "rank": "genus",
                  "scientificName": "Troides",
                  "chineseName": "裳凤蝶属",
                  "description": "裳凤蝶属包含一组大型凤蝶，属名指其与鸟翼凤蝶属的形态相似性。本页按现行名录和接受名口径收录21个物种条目，分布于南亚至澳大拉西亚热带地区。成虫后翅通常具有金黄色斑区，胸部两侧常见红色绒毛。全属列入CITES附录II。",
                  "protectionNote": "全属受CITES管控",
                  "protectedSpeciesCount": 21,
                  "children": [
                    {
                      "id": "subgen_005",
                      "rank": "subgenus",
                      "scientificName": "Ripponia",
                      "chineseName": "Ripponia亚属",
                      "description": "Ripponia亚属是裳凤蝶属中较为原始的类群，包含少数基部物种，外形与其他亚属有所不同；其成员仍由CITES的Troides spp.属级列名覆盖。",
                      "children": [
                        {
                          "id": "sp015",
                          "rank": "species",
                          "scientificName": "Troides hypolitus",
                          "chineseName": "海滨裳凤蝶",
                          "author": "(Cramer, 1775)",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": null,
                            "managementNote": "按CITES附录II履约管理"
                          },
                          "description": "海滨裳凤蝶是裳凤蝶属的基部类群，外形与典型裳凤蝶有所不同。雌蝶最具辨识度：黑褐色前翅有宽密的银灰色脉间条纹，后翅由金黄色与丝绢银灰色大斑镶嵌组成，多数大斑内有椭圆黑心；雄蝶的后翅也不是普通裳凤蝶那种完整金黄色区。翼展约14-16厘米。",
                          "distribution": "印度尼西亚苏拉威西岛及摩鹿加群岛",
                          "remarks": "属内基部类群；由CITES的Troides spp.属级列名覆盖"
                        }
                      ]
                    },
                    {
                      "id": "subgen_006",
                      "rank": "subgenus",
                      "scientificName": "Troides",
                      "chineseName": "Troides亚属（指名亚属）",
                      "description": "指名亚属Troides是裳凤蝶属的核心类群，包含了绝大多数裳凤蝶物种。该亚属成员后翅具有典型的金黄色区域，前翅黑色，胸部侧面有红色绒毛。中国2021年《国家重点保护野生动物名录》将裳凤蝶、金裳凤蝶、荧光裳凤蝶、鸟翼裳凤蝶、珂裳凤蝶、楔纹裳凤蝶和小斑裳凤蝶列为国家二级保护动物。",
                      "children": [
                        {
                          "id": "sp016",
                          "rank": "species",
                          "scientificName": "Troides aeacus",
                          "chineseName": "金裳凤蝶",
                          "author": "(C. & R. Felder, 1860)",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": "II",
                            "managementNote": "中国国家二级保护"
                          },
                          "description": "金裳凤蝶是中国最大的蝴蝶，翼展可达15-19厘米。种加词aeacus源自希腊神话中的埃阿科斯，是冥界三判官之一。雄蝶前翅黑色带有天鹅绒般的光泽，后翅大部分为半透明的金黄色，仅翅脉和外缘为黑色。外缘的黑色锯齿状斑纹通常与翅脉上的黑色条纹相连或极其接近。胸部侧面具有鲜红色绒毛，是重要的鉴定特征。雌蝶体型略大，后翅黄色区域有更多黑色斑点。",
                          "distribution": "中国南部（福建、广东、广西、云南、海南、台湾）、越南、老挝、缅甸、泰国、马来西亚、印度东北部",
                          "remarks": "中国原产种；在中国分布于南方热带和亚热带森林"
                        },
                        {
                          "id": "sp017",
                          "rank": "species",
                          "scientificName": "Troides helena",
                          "chineseName": "裳凤蝶",
                          "author": "(Linnaeus, 1758)",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": "II",
                            "managementNote": "中国国家二级保护"
                          },
                          "description": "裳凤蝶是裳凤蝶属的模式种，翼展约14-18厘米。其外形与金裳凤蝶相近，但后翅外缘黑斑通常彼此较分离，与黑色翅脉的连接程度较低，金黄色斑区因而较连续。雄蝶后翅内缘具有用于释放性信息素的折叠袋状性标。",
                          "distribution": "中国南部（云南、广西、海南）、南亚至东南亚广泛分布",
                          "remarks": "中国原产，裳凤蝶属模式种，与金裳凤蝶的区分需注意后翅黑斑的分布模式"
                        },
                        {
                          "id": "sp018",
                          "rank": "species",
                          "scientificName": "Troides magellanus",
                          "chineseName": "荧光裳凤蝶",
                          "alternativeChineseNames": ["珠光裳凤蝶"],
                          "author": "(C. & R. Felder, 1862)",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": "II",
                            "managementNote": "中国国家二级保护"
                          },
                          "description": "荧光裳凤蝶以航海家费迪南德·麦哲伦命名，翼展约14-17厘米。后翅在斜射光下可呈蓝绿色蛋白石状虹彩，该结构色由翅鳞微观结构产生，并非色素颜色。在中国的记录限于台湾兰屿，当地亚种Troides magellanus sonani亦见于达悟族文化记录。",
                          "distribution": "中国台湾（兰屿）、菲律宾",
                          "remarks": "中国记录限于兰屿；当地亚种Troides magellanus sonani具有变彩结构色"
                        },
                        {
                          "id": "sp019",
                          "rank": "species",
                          "scientificName": "Troides amphrysus",
                          "chineseName": "鸟翼裳凤蝶",
                          "author": "(Cramer, 1779)",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": "II",
                            "managementNote": "中国国家二级保护"
                          },
                          "description": "鸟翼裳凤蝶是裳凤蝶属中体型最大的种类之一，翼展可达17-19厘米，雌蝶甚至可超过20厘米。其种加词amphrysus来源于希腊神话。该物种的后翅金黄色区域面积巨大，前翅宽阔，整体体态与鸟翼凤蝶属相似，故名'鸟翼裳凤蝶'。",
                          "distribution": "马来半岛、苏门答腊、爪哇、婆罗洲",
                          "remarks": "体型巨大，是裳凤蝶属中最大的种类之一"
                        },
                        {
                          "id": "sp020",
                          "rank": "species",
                          "scientificName": "Troides cuneifera",
                          "chineseName": "楔纹裳凤蝶",
                          "author": "(Oberthür, 1879)",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": "II",
                            "managementNote": "中国国家二级保护"
                          },
                          "description": "楔纹裳凤蝶雄蝶后翅金黄色区内可见扩散状黑色楔斑，但斑纹存在个体和地理变异，部分个体较淡或缺失。鉴别时需结合产地及其他形态特征。翼展约14-16厘米，记录多来自海拔约1200-2000米的山地森林。",
                          "distribution": "泰国南部至马来半岛、苏门答腊、爪哇、婆罗洲",
                          "remarks": "山地型；与鸟翼裳凤蝶极易混淆，楔斑存在明显个体和地理变异"
                        },
                        {
                          "id": "sp021",
                          "rank": "species",
                          "scientificName": "Troides miranda",
                          "chineseName": "马来珠光裳凤蝶",
                          "author": "(Butler, 1869)",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": null,
                            "managementNote": "按CITES附录II履约管理"
                          },
                          "description": "马来珠光裳凤蝶分布于婆罗洲山地雨林，翼展约14-16厘米。雄蝶黑色前翅在斜射光下可见局部蓝色鳞光，后翅为金黄色并具有较宽的黑色端带；其前翅鳞光位置与荧光裳凤蝶的后翅虹彩不同。",
                          "distribution": "婆罗洲",
                          "remarks": "雄蝶前翅在斜光下有局部蓝辉，后翅不具荧光裳凤蝶式蛋白石虹彩"
                        },
                        {
                          "id": "sp022",
                          "rank": "species",
                          "scientificName": "Troides andromache",
                          "chineseName": "加里曼丹裳凤蝶",
                          "author": "(Staudinger, 1892)",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": null,
                            "managementNote": "按CITES附录II履约管理"
                          },
                          "description": "加里曼丹裳凤蝶以特洛伊王子赫克托尔的妻子安德洛玛克命名。该物种是婆罗洲山地雨林的高海拔物种，栖息于海拔1000米以上的森林中。翼展约14-16厘米，对特定的山地环境有较强依赖性。",
                          "distribution": "婆罗洲（加里曼丹）山地",
                          "remarks": "高山物种，栖息于婆罗洲山地雨林"
                        },
                        {
                          "id": "sp023",
                          "rank": "species",
                          "scientificName": "Troides haliphron",
                          "chineseName": "小斑裳凤蝶",
                          "author": "(Boisduval, 1836)",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": "II",
                            "managementNote": "中国国家二级保护"
                          },
                          "description": "小斑裳凤蝶的典型雄蝶前翅为黑褐色并有较弱的淡灰脉间条纹，后翅大部分为黑色，仅中央保留一条由约5枚金黄色斑组成的窄带；基部、内缘和外缘均为宽黑区。翼展约13-15厘米，分布于苏拉威西岛及周边小巽他群岛。",
                          "distribution": "印度尼西亚苏拉威西岛、小巽他群岛",
                          "remarks": "典型雄蝶后翅黑色范围大，仅保留狭窄金黄色中央斑带"
                        },
                        {
                          "id": "sp024",
                          "rank": "species",
                          "scientificName": "Troides minos",
                          "chineseName": "印度裳凤蝶",
                          "author": "(Cramer, 1779)",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": null,
                            "managementNote": "按CITES附录II履约管理"
                          },
                          "description": "印度裳凤蝶特有于印度次大陆南部，主要分布于西高止山脉的热带森林，翼展约14-16厘米。其种加词minos源自希腊神话中的米诺斯。",
                          "distribution": "印度南部（西高止山脉）",
                          "remarks": "印度南部特有种"
                        },
                        {
                          "id": "sp025",
                          "rank": "species",
                          "scientificName": "Troides rhadamantus",
                          "chineseName": "菲律宾裳凤蝶",
                          "author": "(Lucas, 1835)",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": null,
                            "managementNote": "按CITES附录II履约管理"
                          },
                          "description": "菲律宾裳凤蝶分布于菲律宾多个岛群，包括吕宋、民都洛和米沙鄢，翼展约14-17厘米。其种加词rhadamantus源自希腊神话中的拉达曼提斯。",
                          "distribution": "菲律宾群岛",
                          "remarks": "菲律宾广布种"
                        },
                        {
                          "id": "sp026",
                          "rank": "species",
                          "scientificName": "Troides oblongomaculatus",
                          "chineseName": "长斑裳凤蝶",
                          "author": "(Goeze, 1779)",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": null,
                            "managementNote": "按CITES附录II履约管理"
                          },
                          "description": "长斑裳凤蝶因后翅外缘的黑色斑纹呈长椭圆形而得名。翼展约14-17厘米，是裳凤蝶属中分布最靠东的种类之一，其分布区延伸至新几内亚岛。该物种也是摩鹿加群岛最常见的裳凤蝶。",
                          "distribution": "摩鹿加群岛、新几内亚岛",
                          "remarks": "分布至新几内亚，后翅黑斑呈长形"
                        },
                        {
                          "id": "sp027",
                          "rank": "species",
                          "scientificName": "Troides darsius",
                          "chineseName": "斯里兰卡裳凤蝶",
                          "author": "(Gray, 1853)",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": null,
                            "managementNote": "按CITES附录II履约管理"
                          },
                          "description": "斯里兰卡裳凤蝶是斯里兰卡岛的特有种，也是该国最大的蝴蝶之一。翼展约14-16厘米，后翅金黄色区域鲜艳。该物种主要栖息于斯里兰卡西南部的热带雨林中，是当地重要的保护物种。",
                          "distribution": "斯里兰卡特有",
                          "remarks": "斯里兰卡特有种"
                        },
                        {
                          "id": "sp028",
                          "rank": "species",
                          "scientificName": "Troides vandepolli",
                          "chineseName": "范氏裳凤蝶",
                          "author": "(Snellen, 1890)",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": null,
                            "managementNote": "按CITES附录II履约管理"
                          },
                          "description": "范氏裳凤蝶以荷兰昆虫学家范德波尔命名。该物种包含苏门答腊和爪哇的地理型，翼展约13-15厘米。雄蝶后翅中央为较大的金黄色盘区，周围由宽黑色基部、内缘和端缘包围。",
                          "distribution": "印度尼西亚苏门答腊岛、爪哇岛",
                          "remarks": "包含苏门答腊和爪哇地理型，不是爪哇岛单岛特有种"
                        },
                        {
                          "id": "sp029",
                          "rank": "species",
                          "scientificName": "Troides criton",
                          "chineseName": "珂裳凤蝶",
                          "author": "(C. & R. Felder, 1860)",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": "II",
                            "managementNote": "中国国家二级保护"
                          },
                          "description": "珂裳凤蝶以希腊神话人物克里顿命名。该物种分布于摩鹿加群岛的部分岛屿，翼展约14-16厘米。是该区域特有的裳凤蝶之一。",
                          "distribution": "印度尼西亚摩鹿加群岛",
                          "remarks": "摩鹿加群岛特有种"
                        },
                        {
                          "id": "sp030",
                          "rank": "species",
                          "scientificName": "Troides riedeli",
                          "chineseName": "瑞氏裳凤蝶",
                          "author": "(Kirsch, 1885)",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": null,
                            "managementNote": "按CITES附录II履约管理"
                          },
                          "description": "瑞氏裳凤蝶以约翰·杰拉德·弗里德里希·里德尔命名，特有于印度尼西亚塔宁巴群岛，翼展约13-15厘米。",
                          "distribution": "印度尼西亚塔宁巴群岛",
                          "remarks": "塔宁巴群岛特有种"
                        },
                        {
                          "id": "sp031",
                          "rank": "species",
                          "scientificName": "Troides plato",
                          "chineseName": "帝纹岛裳凤蝶",
                          "author": "Wallace, 1865",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": null,
                            "managementNote": "按CITES附录II履约管理"
                          },
                          "description": "帝纹岛裳凤蝶以希腊哲学家柏拉图命名，由阿尔弗雷德·拉塞尔·华莱士描述。该物种分布于帝汶岛及周边岛屿，翼展约14-16厘米。",
                          "distribution": "帝汶岛及周边岛屿",
                          "remarks": "帝汶岛区域特有种"
                        },
                        {
                          "id": "sp032",
                          "rank": "species",
                          "scientificName": "Troides staudingeri",
                          "chineseName": "斯氏裳凤蝶",
                          "author": "(Röber, 1888)",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": null,
                            "managementNote": "按CITES附录II履约管理"
                          },
                          "description": "斯氏裳凤蝶以德国鳞翅目学家奥托·斯陶丁格尔命名，翼展约14-16厘米。可靠记录集中在印度尼西亚马鲁古南部岛链；不同岛屿亚种的后翅金斑和黑化程度存在差异。",
                          "distribution": "印度尼西亚马鲁古南部岛链（达马尔、巴巴尔、莫阿、莱蒂、韦塔等，亦有塔宁巴记录）",
                          "remarks": "马鲁古南部岛链物种，亚种间黑化程度差异明显"
                        },
                        {
                          "id": "sp033",
                          "rank": "species",
                          "scientificName": "Troides dohertyi",
                          "chineseName": "辉黑裳凤蝶",
                          "author": "(Rippon, 1893)",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": null,
                            "managementNote": "按CITES附录II履约管理"
                          },
                          "description": "辉黑裳凤蝶以威廉·多尔蒂命名，是裳凤蝶属中黑化程度较高的成员。典型雄蝶背面前后翅近乎全黑，后翅通常不见金黄色区；金色带主要位于腹面。翼展约14-16厘米。",
                          "distribution": "印度尼西亚北苏拉威西塔劳群岛（含卡拉克隆、萨利巴布等岛）",
                          "remarks": "塔劳群岛特有的高度黑化种；由CITES的Troides spp.属级列名覆盖"
                        },
                        {
                          "id": "sp034",
                          "rank": "species",
                          "scientificName": "Troides prattorum",
                          "chineseName": "布鲁岛裳凤蝶",
                          "author": "(Joicey & Talbot, 1922)",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": null,
                            "managementNote": "按CITES附录II履约管理"
                          },
                          "description": "布鲁岛裳凤蝶以普拉特兄弟命名，特有于印度尼西亚布鲁岛，翼展约14-16厘米。后翅在特定入射角度下可见蓝绿色变彩光泽。",
                          "distribution": "印度尼西亚布鲁岛特有",
                          "remarks": "布鲁岛特有种，具变彩光泽；由CITES的Troides spp.属级列名覆盖"
                        },
                        {
                          "id": "sp035",
                          "rank": "species",
                          "scientificName": "Troides plateni",
                          "chineseName": "巴拉望裳凤蝶",
                          "author": "(Staudinger, 1888)",
                          "protectionLevel": {
                            "cites": "II",
                            "chinaLevel": null,
                            "managementNote": "按CITES附录II履约管理"
                          },
                          "description": "巴拉望裳凤蝶以卡尔·康斯坦丁·普拉滕命名，特有于菲律宾巴拉望岛，翼展约14-16厘米。本项目按独立种处理，部分资料采用Troides rhadamantus plateni组合。",
                          "distribution": "菲律宾巴拉望岛特有",
                          "remarks": "本项目按独立种处理；部分资料采用亚种处理；巴拉望岛特有"
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": "gen_003",
                  "rank": "genus",
                  "scientificName": "Trogonoptera",
                  "chineseName": "红颈凤蝶属",
                  "description": "红颈凤蝶属是一个小型属，仅包含2种，均分布于东南亚。其最显著的特征是胸部背面（颈部）具有一圈鲜艳的红色绒毛，故名红颈凤蝶。该属成员前翅黑色，带有排列整齐的翠绿色三角形斑纹，被认为是世界上最美丽的蝴蝶之一。全属被列入CITES附录II。",
                  "protectionNote": "全属受CITES管控",
                  "protectedSpeciesCount": 2,
                  "children": [
                    {
                      "id": "sp036",
                      "rank": "species",
                      "scientificName": "Trogonoptera brookiana",
                      "chineseName": "翠叶红颈凤蝶",
                      "author": "(Wallace, 1855)",
                      "protectionLevel": {
                        "cites": "II",
                        "chinaLevel": null,
                        "managementNote": "按CITES附录II履约管理"
                      },
                      "description": "翠叶红颈凤蝶是马来西亚国蝶，以詹姆斯·布鲁克命名。雄蝶翼展约15-17厘米，翅面黑色，前翅具有约7枚相连或近相连的绿色齿状放射斑，后翅中央绿色斑区由黑色翅脉分隔；头部和体侧呈红色。雌蝶体型较大，翅面偏褐黑，绿色斑纹减弱并可见灰白斑区。",
                      "distribution": "马来半岛、苏门答腊、婆罗洲",
                      "remarks": "马来西亚国蝶；分布于马来半岛、苏门答腊和婆罗洲"
                    },
                    {
                      "id": "sp037",
                      "rank": "species",
                      "scientificName": "Trogonoptera trojana",
                      "chineseName": "特洛伊红颈凤蝶",
                      "author": "(Honrath, 1886)",
                      "protectionLevel": {
                        "cites": "II",
                        "chinaLevel": null,
                        "managementNote": "按CITES附录II履约管理"
                      },
                      "description": "特洛伊红颈凤蝶是菲律宾巴拉望岛的特有种，以古希腊传说中的特洛伊命名。与翠叶红颈凤蝶非常相似，雄蝶同为黑色天鹅绒翅并具有亮金绿色齿状带，但后翅绿色区域明显较小、黑色区更占优势。公开资料常记载翼展约18-19厘米。",
                      "distribution": "菲律宾巴拉望岛特有",
                      "remarks": "巴拉望岛特有种，与翠叶红颈凤蝶的主要区别在于后翅绿斑较少"
                    }
                  ]
                },
                {
                  "id": "gen_004",
                  "rank": "genus",
                  "scientificName": "Atrophaneura",
                  "chineseName": "曙凤蝶属",
                  "description": "本页沿用保护名录中的Atrophaneura组合收录两种曙凤蝶；GBIF Backbone当前将它们接受为Pachliopta jophon和Pachliopta pandiyana。两种均为黑色翅、后翅具白斑和红色亚缘斑的马兜铃凤蝶类，并列入CITES附录II。",
                  "protectionNote": "仅部分物种受国际公约保护",
                  "protectedSpeciesCount": 2,
                  "children": [
                    {
                      "id": "sp038",
                      "rank": "species",
                      "scientificName": "Atrophaneura jophon",
                      "chineseName": "斯里兰卡曙凤蝶",
                      "author": "(Gray, 1852)",
                      "protectionLevel": {
                        "cites": "II",
                        "chinaLevel": null,
                        "managementNote": "按CITES附录II履约管理"
                      },
                      "taxonomyNote": "本页沿用保护名录组合Atrophaneura jophon；GBIF Backbone当前接受名为Pachliopta jophon。",
                      "description": "斯里兰卡曙凤蝶特有于斯里兰卡西南部，翼展约10-12厘米。翅面黑色，后翅具有深红色至粉红色斑纹和波状外缘。其分布范围局限，栖息地持续减少；IUCN于2019年将其评估为濒危（EN）。",
                      "distribution": "斯里兰卡西南部热带雨林特有",
                      "remarks": "斯里兰卡特有种，IUCN濒危物种",
                      "iucnStatus": "EN（濒危）"
                    },
                    {
                      "id": "sp039",
                      "rank": "species",
                      "scientificName": "Atrophaneura pandiyana",
                      "chineseName": "马拉巴尔曙凤蝶",
                      "author": "(Moore, 1881)",
                      "protectionLevel": {
                        "cites": "II",
                        "chinaLevel": null,
                        "managementNote": "按CITES附录II履约管理"
                      },
                      "taxonomyNote": "本页沿用保护名录组合Atrophaneura pandiyana；GBIF Backbone当前接受名为Pachliopta pandiyana。",
                      "description": "马拉巴尔曙凤蝶是印度南部西高止山脉的特有种，以古印度潘地亚王朝命名。翼展约10-12厘米，翅膀黑色，后翅具有粉红色至深红色的斑纹。该物种栖息于印度南部的热带雨林中，由于栖息地破碎化而面临威胁。",
                      "distribution": "印度南部（西高止山脉）特有",
                      "remarks": "印度南部特有种"
                    }
                  ]
                },
                {
                  "id": "gen_011",
                  "rank": "genus",
                  "scientificName": "Losaria",
                  "chineseName": "锤尾凤蝶属",
                  "description": "锤尾凤蝶属分布于南亚、东南亚及中国南部，后翅具有末端膨大的尾突。中国2021年《国家重点保护野生动物名录》将锤尾凤蝶列为国家二级保护动物。",
                  "protectedSpeciesCount": 1,
                  "children": [
                    {
                      "id": "sp055",
                      "rank": "species",
                      "scientificName": "Losaria coon",
                      "chineseName": "锤尾凤蝶",
                      "author": "(Fabricius, 1793)",
                      "protectionLevel": {
                        "cites": null,
                        "chinaLevel": "II",
                        "managementNote": "中国国家二级保护"
                      },
                      "description": "锤尾凤蝶因后翅尾突末端呈锤状而得名。该物种分布于中国南部以及南亚、东南亚，中国2021年名录将其列为国家二级保护动物。",
                      "distribution": "中国南部、南亚及东南亚",
                      "remarks": "非CITES列名物种，依据中国国家重点保护名录保护"
                    }
                  ]
                }
              ]
            },
            {
              "id": "tribe_002",
              "rank": "tribe",
              "scientificName": "Teinopalpini",
              "chineseName": "喙凤蝶族",
              "description": "喙凤蝶族仅包含喙凤蝶属，成员因下唇须显著延长、外形近似喙状而得名。该类群分布于喜马拉雅山脉至东南亚的山地森林，其中两个物种均列入CITES附录II。",
              "protectedSpeciesCount": 2,
              "children": [
                {
                  "id": "gen_005",
                  "rank": "genus",
                  "scientificName": "Teinopalpus",
                  "chineseName": "喙凤蝶属",
                  "description": "喙凤蝶属仅包含2种，均为喜马拉雅至东南亚山地的珍稀蝴蝶。属名源自希腊语teino（延伸）和palpus（触须），形容其延长的下唇须。该属成员翅膀以翠绿色为主调，雌蝶后翅具有多条尾突。金斑喙凤蝶是中国现行名录中唯一的国家一级保护蝶类。",
                  "protectedSpeciesCount": 2,
                  "children": [
                    {
                      "id": "sp040",
                      "rank": "species",
                      "scientificName": "Teinopalpus aureus",
                      "chineseName": "金斑喙凤蝶",
                      "author": "Mell, 1923",
                      "protectionLevel": {
                        "cites": "II",
                        "chinaLevel": "I",
                        "managementNote": "中国国家一级保护"
                      },
                      "description": "金斑喙凤蝶是中国现行名录中唯一的国家一级保护蝶类。种加词aureus意为'金色的'，源于雄蝶后翅中央的金黄色大斑。雄蝶翼展约9-11厘米，前翅黑色带有翠绿色光泽，后翅具有一个显著的金黄色至橙金色椭圆形大斑，后缘有一条细长的尾突。雌蝶体型更大，翼展可达11-13厘米，后翅具有多条长短不一的尾突。该物种分布于中国南方、越南和老挝的山地森林。",
                      "distribution": "中国南方（福建、江西、广东、广西、海南、湖南、浙江）、越南、老挝的山地森林",
                      "remarks": "中国现行名录中唯一的国家一级保护蝶类；同时列入CITES附录II"
                    },
                    {
                      "id": "sp041",
                      "rank": "species",
                      "scientificName": "Teinopalpus imperialis",
                      "chineseName": "喙凤蝶",
                      "author": "Hope, 1843",
                      "protectionLevel": {
                        "cites": "II",
                        "chinaLevel": "II",
                        "managementNote": "中国国家二级保护"
                      },
                      "description": "喙凤蝶是喙凤蝶属的模式种，翼展约9-11厘米。与金斑喙凤蝶相比，雄蝶后翅金色斑块通常较小且偏黄色，翅面绿色调较强；雌蝶体型较大并具有多条尾突。该物种分布于尼泊尔、不丹、印度北部、缅甸、泰国、越南北部和中国西南部。",
                      "distribution": "尼泊尔、不丹、印度北部、缅甸、泰国北部、越南北部、中国西南部",
                      "remarks": "喙凤蝶属模式种，国际贸易需CITES许可证"
                    }
                  ]
                }
              ]
            },
            {
              "id": "tribe_004",
              "rank": "tribe",
              "scientificName": "Papilionini",
              "chineseName": "凤蝶族",
              "description": "凤蝶族是凤蝶亚科中最大的族，包含了凤蝶属等核心类群。该族成员分布全球，从热带到温带均有分布，物种多样性极高。大多数种类不受特别保护，但有少数岛屿特有种因分布范围极其狭小而被列入CITES附录I，享有最高级别的国际贸易保护。",
              "protectedSpeciesCount": 2,
              "children": [
                {
                  "id": "gen_008",
                  "rank": "genus",
                  "scientificName": "Papilio",
                  "chineseName": "凤蝶属",
                  "description": "凤蝶属是凤蝶科中物种较多的属之一，约含200余种，除南极洲外各大陆均有分布。该属成员的后翅常具有尾突，翅纹变化较大。本页收录的两个岛屿特有种因分布受限并面临灭绝风险而列入CITES附录I。",
                  "protectedSpeciesCount": 2,
                  "children": [
                    {
                      "id": "sp049",
                      "rank": "species",
                      "scientificName": "Papilio chikae",
                      "chineseName": "吕宋凤蝶",
                      "author": "Igarashi, 1965",
                      "protectionLevel": {
                        "cites": "I",
                        "chinaLevel": null,
                        "managementNote": "按CITES附录I履约管理"
                      },
                      "description": "吕宋凤蝶特有于菲律宾吕宋岛北部科迪勒拉山区，翼展约10-12厘米。雄蝶黑褐色前翅具有细密的金绿色鳞带，后翅具有宽阔的蓝绿色金属带、红蓝黑综合色斑和细长尾突。其分布限于山地森林，IUCN将其评估为濒危（EN）。",
                      "distribution": "菲律宾吕宋岛北部山地特有",
                      "remarks": "CITES附录I物种，商业性国际贸易受严格限制，IUCN濒危物种",
                      "iucnStatus": "EN（濒危）"
                    },
                    {
                      "id": "sp050",
                      "rank": "species",
                      "scientificName": "Papilio homerus",
                      "chineseName": "荷马凤蝶",
                      "author": "Fabricius, 1793",
                      "protectionLevel": {
                        "cites": "I",
                        "chinaLevel": null,
                        "managementNote": "按CITES附录I履约管理"
                      },
                      "description": "荷马凤蝶是西半球翼展最大的蝴蝶，翼展可达约15厘米。翅面黑色并具有黄色条带和斑块，后翅另有蓝色斑纹。该物种特有于牙买加，现存记录集中在岛东部和西部两片雨林区域；栖息地丧失和采集压力与其种群下降相关，IUCN将其评估为濒危（EN）。",
                      "distribution": "牙买加特有",
                      "remarks": "CITES附录I物种，完全禁止商业性国际贸易，西半球最大的蝴蝶",
                      "iucnStatus": "EN（濒危）"
                    }
                  ]
                }
              ]
            }
          ]
        },
{
          "id": "subfam_002",
          "rank": "subfamily",
          "scientificName": "Parnassiinae",
          "chineseName": "绢蝶亚科",
          "description": "绢蝶亚科包括锯凤蝶族和绢蝶族。本页的锯凤蝶族收录尾凤蝶属和虎凤蝶属共8个条目，多分布于东亚及喜马拉雅山地森林；绢蝶族收录阿波罗绢蝶和君主绢蝶，主要分布于北半球山地和高原。",
          "protectedSpeciesCount": 10,
          "children": [
            {
              "id": "tribe_003",
              "rank": "tribe",
              "scientificName": "Zerynthiini",
              "chineseName": "锯凤蝶族",
              "description": "锯凤蝶族主要分布于古北界，从地中海地区延伸至东亚。成员通常体型中等，翅纹复杂，后翅常具有尾突和红色斑纹，幼虫取食马兜铃科植物。本页收录尾凤蝶属、虎凤蝶属和绢蝶属中的保护名录条目。",
              "protectedSpeciesCount": 8,
              "children": [
                {
                  "id": "gen_006",
                  "rank": "genus",
                  "scientificName": "Bhutanitis",
                  "chineseName": "尾凤蝶属",
                  "description": "尾凤蝶属是喜马拉雅山脉至中国西南山地的特有属，属名源自喜马拉雅山地小国不丹（Bhutan）。该属成员最显著的特征是后翅具有多条细长的尾突（2-5条不等），以及后翅臀角的鲜红色斑块。中国2021年名录列出7个国家二级保护条目；CITES采用较合并的标准命名，但以Bhutanitis spp.属级列入附录II。",
                  "protectionNote": "全属受CITES及中国国家保护",
                  "protectedSpeciesCount": 7,
                  "children": [
                    {
                      "id": "sp042",
                      "rank": "species",
                      "scientificName": "Bhutanitis lidderdalii",
                      "chineseName": "多尾凤蝶",
                      "author": "Atkinson, 1873",
                      "protectionLevel": {
                        "cites": "II",
                        "chinaLevel": "II",
                        "managementNote": "中国国家二级保护"
                      },
                      "description": "多尾凤蝶是尾凤蝶属中翼展较大的物种，约10-12厘米，以英国博物学家利德代尔命名。翅面底色为黑褐色，前翅具有细密的黄白色条纹，后翅有三个眼状斑、红色臀角斑和多条细长尾突。在中国主要记录于云南高黎贡山和西藏东南部。",
                      "distribution": "不丹、印度东北部、缅甸、泰国北部、中国（云南、西藏）",
                      "remarks": "包含指名亚种及中国有记录的Bhutanitis lidderdalii spinosa"
                    },
                    {
                      "id": "sp043",
                      "rank": "species",
                      "scientificName": "Bhutanitis thaidina",
                      "chineseName": "三尾凤蝶",
                      "author": "(Blanchard, 1871)",
                      "protectionLevel": {
                        "cites": "II",
                        "chinaLevel": "II",
                        "managementNote": "中国国家二级保护"
                      },
                      "description": "三尾凤蝶是中国特有种，也是尾凤蝶属在中国分布最广的物种。翼展约8-10厘米，体型较多尾凤蝶小。后翅具有三条明显的尾突（有时中间一条较短），红色斑纹较发达，前翅的浅色条纹较宽且略带黄色。模式产地在四川宝兴（穆坪），这里也是大熊猫的模式产地。幼虫寄主为马兜铃科植物（如木香马兜铃），因此对生境要求苛刻，种群易受栖息地破碎化影响。",
                      "distribution": "中国特有：四川、陕西、甘肃、湖北、云南、西藏、重庆",
                      "remarks": "中国特有种，分布于中国西南至秦岭山地"
                    },
                    {
                      "id": "sp044",
                      "rank": "species",
                      "scientificName": "Bhutanitis mansfieldi",
                      "chineseName": "双尾凤蝶",
                      "alternativeChineseNames": ["双尾褐凤蝶"],
                      "author": "(Riley, 1939)",
                      "protectionLevel": {
                        "cites": "II",
                        "chinaLevel": "II",
                        "managementNote": "中国国家二级保护"
                      },
                      "description": "双尾凤蝶以英国外交官和博物学家曼斯菲尔德命名，已知分布限于中国西南部，翼展约8-10厘米。翅面浅色条纹呈不规则网状或方格状，后翅具有两条较宽且明显的主要尾突。",
                      "distribution": "中国特有：四川、云南",
                      "remarks": "中国特有种，现有分布记录有限",
                      "iucnStatus": "VU（易危）"
                    },
                    {
                      "id": "sp045",
                      "rank": "species",
                      "scientificName": "Bhutanitis ludlowi",
                      "chineseName": "不丹尾凤蝶",
                      "alternativeChineseNames": ["路德洛喙凤蝶"],
                      "author": "Gabriel, 1942",
                      "protectionLevel": {
                        "cites": "II",
                        "chinaLevel": "II",
                        "managementNote": "中国国家二级保护"
                      },
                      "description": "不丹尾凤蝶以英国植物学家和探险家弗兰克·路德洛命名。该物种在1934年首次发现后数十年间再无记录，直到2009年在不丹被重新发现。翼展约8-10厘米，外形与三尾凤蝶相似但有细微差异。现有可靠记录来自不丹和印度阿鲁纳恰尔邦，IUCN将其评估为濒危（EN）。",
                      "distribution": "不丹、印度阿鲁纳恰尔邦",
                      "remarks": "濒危物种，曾长期无记录，2009年重新发现",
                      "iucnStatus": "EN（濒危）"
                    },
                    {
                      "id": "sp046",
                      "rank": "species",
                      "scientificName": "Bhutanitis yulongensis",
                      "chineseName": "玉龙尾凤蝶",
                      "author": "Chou, 1992",
                      "protectionLevel": {
                        "cites": "II",
                        "chinaLevel": "II",
                        "managementNote": "中国国家二级保护"
                      },
                      "citesBasis": "Bhutanitis spp.（CITES附录II属级列名）",
                      "taxonomyNote": "中国2021年名录作为独立条目；CITES Checklist与GBIF将其列为Bhutanitis thaidina的异名。",
                      "description": "玉龙尾凤蝶的模式产地为云南玉龙雪山。中国2021年《国家重点保护野生动物名录》将该名称作为独立条目列为国家二级保护动物；CITES Checklist和GBIF Backbone将其列为Bhutanitis thaidina的异名。",
                      "distribution": "中国云南（玉龙雪山区域）",
                      "remarks": "中国名录采用独立条目；CITES Checklist与GBIF Backbone采用异名处理"
                    },
                    {
                      "id": "sp047",
                      "rank": "species",
                      "scientificName": "Bhutanitis nigrilima",
                      "chineseName": "玄裳尾凤蝶",
                      "alternativeChineseNames": ["黑纹尾凤蝶"],
                      "author": "Chou, 1992",
                      "protectionLevel": {
                        "cites": "II",
                        "chinaLevel": "II",
                        "managementNote": "中国国家二级保护"
                      },
                      "citesBasis": "Bhutanitis spp.（CITES附录II属级列名）",
                      "taxonomyNote": "中国2021年名录作为独立条目；CITES Checklist与GBIF将其列为Bhutanitis thaidina的异名。",
                      "description": "中国2021年《国家重点保护野生动物名录》将玄裳尾凤蝶作为独立条目列为国家二级保护动物；CITES Checklist和GBIF Backbone将该名称列为Bhutanitis thaidina的异名。",
                      "distribution": "中国西南",
                      "remarks": "中国法定名录独立条目；国际数据库通常作为三尾凤蝶异名"
                    },
                    {
                      "id": "sp054",
                      "rank": "species",
                      "scientificName": "Bhutanitis pulchristriata",
                      "chineseName": "丽斑尾凤蝶",
                      "author": "Saigusa & Lee, 1982",
                      "protectionLevel": {
                        "cites": "II",
                        "chinaLevel": "II",
                        "managementNote": "中国国家二级保护"
                      },
                      "citesBasis": "Bhutanitis spp.（CITES附录II属级列名）",
                      "taxonomyNote": "中国2021年名录与GBIF作为独立种；CITES Checklist未单列该名称，属级列名仍覆盖该分类单元。",
                      "description": "中国2021年《国家重点保护野生动物名录》和GBIF Backbone将丽斑尾凤蝶作为独立种处理；部分资料采用Bhutanitis mansfieldi的亚种处理。本项目按中国法定名录的独立条目计数。",
                      "distribution": "中国西南山地",
                      "remarks": "本项目按独立种处理；部分资料采用Bhutanitis mansfieldi的亚种处理"
                    }
                  ]
                },
                {
                  "id": "gen_007",
                  "rank": "genus",
                  "scientificName": "Luehdorfia",
                  "chineseName": "虎凤蝶属",
                  "description": "虎凤蝶属是东亚特有的古老孑遗类群，属名以德国医生和昆虫学家吕多菲命名。该属约4-5种，分布于中国、日本、韩国和俄罗斯远东地区。成虫翅膀黄色，饰有黑色横带，形似虎皮纹，故名虎凤蝶。后翅外缘有红色新月斑列，尾突短。该属蝴蝶是早春出现的物种，成虫期仅一代且持续时间很短，被视为春天的象征。",
                  "protectedSpeciesCount": 1,
                  "children": [
                    {
                      "id": "sp048",
                      "rank": "species",
                      "scientificName": "Luehdorfia chinensis",
                      "chineseName": "中华虎凤蝶",
                      "author": "Leech, 1893",
                      "protectionLevel": {
                        "cites": null,
                        "chinaLevel": "II",
                        "managementNote": "中国国家二级保护"
                      },
                      "description": "中华虎凤蝶是中国特有种，也是虎凤蝶属分布最南的成员。翼展约5-6厘米，翅面黄色并具有黑色横带，后翅外缘有红色新月形斑列和短尾突。该种一年一代，成虫主要见于3-4月，幼虫取食细辛属植物。该物种未列入CITES附录，在本项目中依据中国国家重点保护名录收录。",
                      "distribution": "中国长江中下游地区：江苏、浙江、安徽、湖北、陕西南部",
                      "remarks": "中国特有种，非CITES物种，仅受中国国内法保护。早春出现，成虫期极短"
                    }
                  ]
                }
              ]
            },
            {
              "id": "tribe_005",
              "rank": "tribe",
              "scientificName": "Parnassiini",
              "chineseName": "绢蝶族",
              "description": "绢蝶族（学名：Parnassiini）是凤蝶科绢蝶亚科中的一个族，由2个属组成，包含了68个物种。广泛分布于全北界，从欧洲西南部、亚洲至北美洲西部一带。幼虫的寄主为蒺藜科、景天科、虎耳草科和罂粟科植物。",
              "protectedSpeciesCount": 2,
              "children": [
                {
                  "id": "gen_009",
                  "rank": "genus",
                  "scientificName": "Parnassius",
                  "chineseName": "绢蝶属",
                  "description": "绢蝶属是高山蝴蝶的代表类群，属名源自希腊神话中诗歌和音乐之神阿波罗居住的帕纳索斯山。全属约50余种，主要分布于古北界的山地和高原，从欧洲阿尔卑斯山脉、中亚山地至喜马拉雅山脉和中国西部高原均有分布。中国拥有约30种绢蝶，是世界上绢蝶多样性最高的国家。绢蝶翅膀薄而半透明，通常为白色或乳白色，后翅常有红色眼斑。雌蝶交配后会在腹部末端形成一个角质化的'受精囊栓'（sphragis），阻止再次交配。",
                  "protectedSpeciesCount": 2,
                  "children": [
                    {
                      "id": "sp051",
                      "rank": "species",
                      "scientificName": "Parnassius apollo",
                      "chineseName": "阿波罗绢蝶",
                      "author": "(Linnaeus, 1758)",
                      "protectionLevel": {
                        "cites": "II",
                        "chinaLevel": "II",
                        "managementNote": "中国国家二级保护"
                      },
                      "description": "阿波罗绢蝶是绢蝶属的模式种，翼展约7-9厘米。翅面乳白且半透明，前翅具有黑色斑点，后翅有两个红色、白心并具黑色外圈的眼状斑。该物种分布于欧洲至中亚山地；在中国记录于新疆西部天山和阿勒泰山区。欧洲部分种群已因生境变化等因素消失或下降。",
                      "distribution": "欧洲（阿尔卑斯山脉、比利牛斯山脉、斯堪的纳维亚等）、土耳其、中亚至中国新疆西部",
                      "remarks": "中国仅分布于新疆；列入CITES附录II及中国国家二级保护名录"
                    },
                    {
                      "id": "sp056",
                      "rank": "species",
                      "scientificName": "Parnassius imperator",
                      "chineseName": "君主绢蝶",
                      "author": "Oberthür, 1883",
                      "protectionLevel": {
                        "cites": null,
                        "chinaLevel": "II",
                        "managementNote": "中国国家二级保护"
                      },
                      "description": "君主绢蝶是亚洲高山地区的绢蝶。中国2021年《国家重点保护野生动物名录》将其列为国家二级保护动物；该物种未列入CITES附录。",
                      "distribution": "中国西部高山及青藏高原周边",
                      "remarks": "非CITES列名物种，依据中国国家重点保护名录保护"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "fam_002",
      "rank": "family",
      "scientificName": "Nymphalidae",
      "chineseName": "蛱蝶科",
      "description": "蛱蝶科是蝴蝶中物种最丰富的科，全球约有6000种，占所有蝴蝶种类的三分之一以上。该科成员的一个显著特征是前足退化，无法用于行走，仅有四条功能腿（又称四足蝶）。蛱蝶科包含了众多著名的蝴蝶，如帝王蝶（Danaus）、闪蝶（Morpho）、枯叶蝶（Kallima）等。在中国，蛱蝶科中仅有紫蛱蝶属的两种被列入国家重点保护名录。",
      "protectedSpeciesCount": 2,
      "children": [
        {
          "id": "subfam_003",
          "rank": "subfamily",
          "scientificName": "Apaturinae",
          "chineseName": "闪蛱蝶亚科",
          "description": "闪蛱蝶亚科是蛱蝶科中以雄蝶翅膀具有强烈金属光泽（结构色）著称的类群，又称紫蛱蝶亚科。该亚科约包含20属400余种，主要分布于北半球温带地区。成虫常在树冠层活动，飞翔力强，以树液、腐果和动物粪便等为食，很少访花。该亚科包含了欧洲著名的紫闪蛱蝶（Apatura iris）和东亚的大紫蛱蝶（Sasakia charonda）等。",
          "protectedSpeciesCount": 2,
          "children": [
            {
              "id": "gen_010",
              "rank": "genus",
              "scientificName": "Sasakia",
              "chineseName": "紫蛱蝶属",
              "description": "紫蛱蝶属是东亚分布的大型蛱蝶属，属名纪念日本昆虫学家佐佐木忠次郎。该属约含4-5种，见于中国、日本、韩国和俄罗斯远东地区，翼展可达10-12厘米。雄蝶翅面通常具有蓝紫色结构光泽，雌蝶缺少同等程度的光泽；其生境以阔叶林为主。",
              "protectedSpeciesCount": 2,
              "children": [
                {
                  "id": "sp052",
                  "rank": "species",
                  "scientificName": "Sasakia funebris",
                  "chineseName": "黑紫蛱蝶",
                  "author": "(Leech, 1891)",
                  "protectionLevel": {
                    "cites": null,
                    "chinaLevel": "II",
                    "managementNote": "中国国家二级保护"
                  },
                  "description": "黑紫蛱蝶是中国特有种，翼展约9-11厘米。雄蝶翅面为带蓝黑至蓝紫色鳞光的深色底，前翅中室具有红色纵纹，端半部有长V形白纹，后翅有近似平行的白纹。其蓝紫色鳞光通常弱于大紫蛱蝶，但在适当光线下仍可观察。",
                  "distribution": "中国特有：四川、贵州、湖北（五道峡）、浙江等地",
                  "remarks": "中国特有种；非CITES列名物种，依据中国国家重点保护名录收录"
                },
                {
                  "id": "sp053",
                  "rank": "species",
                  "scientificName": "Sasakia pulcherrima",
                  "chineseName": "最美紫蛱蝶",
                  "author": "Chou & Li",
                  "protectionLevel": {
                    "cites": null,
                    "chinaLevel": "II",
                    "managementNote": "中国国家二级保护"
                  },
                  "taxonomyNote": "中国2021年名录采用Sasakia pulcherrima独立条目。GBIF来源记录写作Sasakia pulcherrima Chou & Li并标记BACKBONE_MATCH_NONE；部分文献采用无效名称或自然杂交来源处理。",
                  "description": "中国2021年《国家重点保护野生动物名录》将最美紫蛱蝶作为独立条目列为国家二级保护动物。已有雄型记录显示翅面黑色，前后翅基部具有蓝紫色金属光泽，前翅端半部有窄长V形灰白纹，后翅臀区有红斑。现有资料未提供可用于本项目的独立雌蝶形态描述。",
                  "distribution": "中国四川、甘肃南部有报道；分类与可靠分布资料仍需进一步核实",
                  "remarks": "中国法定名录采用独立条目；GBIF Backbone未提供对应接受种匹配；非CITES列名物种"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "fam_003",
      "rank": "family",
      "scientificName": "Lycaenidae",
      "chineseName": "灰蝶科",
      "description": "灰蝶科物种体型多较小。中国2021年《国家重点保护野生动物名录》将大斑霾灰蝶和秀山白灰蝶列为国家二级保护动物。",
      "protectedSpeciesCount": 2,
      "children": [
        {
          "id": "subfam_004",
          "rank": "subfamily",
          "scientificName": "Polyommatinae",
          "chineseName": "眼灰蝶亚科",
          "description": "眼灰蝶亚科包含多种与蚂蚁存在复杂共生关系的灰蝶。",
          "protectedSpeciesCount": 2,
          "children": [
            {
              "id": "tribe_006",
              "rank": "tribe",
              "scientificName": "Polyommatini",
              "chineseName": "眼灰蝶族",
              "protectedSpeciesCount": 2,
              "children": [
                {
                  "id": "gen_012",
                  "rank": "genus",
                  "scientificName": "Maculinea",
                  "chineseName": "霾灰蝶属",
                  "protectedSpeciesCount": 1,
                  "children": [
                    {
                      "id": "sp057",
                      "rank": "species",
                      "scientificName": "Maculinea arionides",
                      "chineseName": "大斑霾灰蝶",
                      "author": "(Staudinger, 1887)",
                      "protectionLevel": {
                        "cites": null,
                        "chinaLevel": "II",
                        "managementNote": "中国国家二级保护"
                      },
                      "taxonomyNote": "中国2021年名录采用Maculinea arionides；GBIF Backbone将其处理为Lycaena arionides的异名。",
                      "description": "大斑霾灰蝶在中国2021年《国家重点保护野生动物名录》中列为国家二级保护动物。不同数据库对其属级归属存在差异。",
                      "distribution": "中亚、东亚及中国部分地区",
                      "remarks": "非CITES列名物种，依据中国国家重点保护名录保护"
                    }
                  ]
                },
                {
                  "id": "gen_013",
                  "rank": "genus",
                  "scientificName": "Phengaris",
                  "chineseName": "白灰蝶属",
                  "protectedSpeciesCount": 1,
                  "children": [
                    {
                      "id": "sp058",
                      "rank": "species",
                      "scientificName": "Phengaris xiushani",
                      "chineseName": "秀山白灰蝶",
                      "author": "Wang & Settele, 2010",
                      "protectionLevel": {
                        "cites": null,
                        "chinaLevel": "II",
                        "managementNote": "中国国家二级保护"
                      },
                      "description": "秀山白灰蝶的模式产地记录为云南怒江海拔约2800米处；种名用于纪念Xiushan Li，并含有“秀美山地”的释义。雄蝶翅面乳白，前翅黑色外缘向翅尖加宽并具有3枚深黑色斑点。中国2021年《国家重点保护野生动物名录》将其列为国家二级保护动物。",
                      "distribution": "中国云南怒江（模式产地）及已核实记录范围",
                      "remarks": "非CITES列名物种，依据中国国家重点保护名录收录；模式产地为云南怒江"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

function getSpeciesEntries(root) {
  const species = [];

  function visit(node) {
    if (node.rank === "species") {
      species.push(node);
    }
    (node.children || []).forEach(visit);
  }

  visit(root);
  return species;
}

function refreshProtectedSpeciesCounts(node) {
  if (node.rank === "species") {
    return 1;
  }

  const count = (node.children || []).reduce(
    (total, child) => total + refreshProtectedSpeciesCounts(child),
    0
  );
  node.protectedSpeciesCount = count;
  return count;
}

function calculateProtectionStatistics(root) {
  const species = getSpeciesEntries(root);
  const protectedSpecies = species.filter((entry) => {
    const level = entry.protectionLevel || {};
    return Boolean(level.cites || level.chinaLevel);
  });

  return {
    totalEntries: species.length,
    totalProtectedSpecies: protectedSpecies.length,
    citesI: species.filter((entry) => entry.protectionLevel?.cites === "I").length,
    citesII: species.filter((entry) => entry.protectionLevel?.cites === "II").length,
    chinaLevelI: species.filter((entry) => entry.protectionLevel?.chinaLevel === "I").length,
    chinaLevelII: species.filter((entry) => entry.protectionLevel?.chinaLevel === "II").length
  };
}

function prepareButterflyData(root) {
  getSpeciesEntries(root).forEach((entry) => {
    const level = entry.protectionLevel;
    if (!level) return;

    delete level.equivalent;
    if (level.chinaLevel) {
      level.managementNote = `中国国家${level.chinaLevel === "I" ? "一级" : "二级"}保护`;
    } else if (level.cites) {
      level.managementNote = `按CITES附录${level.cites}履约管理`;
    }
  });

  refreshProtectedSpeciesCounts(root);
  root.statistics = calculateProtectionStatistics(root);
  return root;
}

prepareButterflyData(BUTTERFLY_DATA);

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    BUTTERFLY_DATA,
    calculateProtectionStatistics,
    getSpeciesEntries,
    prepareButterflyData,
    refreshProtectedSpeciesCounts
  };
}
