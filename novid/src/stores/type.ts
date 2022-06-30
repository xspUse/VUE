export interface ShowAddSwitch {
	localConfirm: boolean;
	all: boolean;
	confirm: boolean;
	importedCase: boolean;
	noInfect: boolean;
	nowSevere: boolean;
	localinfeciton: boolean;
	suspect: boolean;
	dead: boolean;
	heal: boolean;
	nowConfirm: boolean;
}

export interface Today {
	confirm: number;
	isUpdated: boolean;
}

export interface Total {
	showHeal: boolean;
	continueDayZeroLocalConfirm: number;
	nowConfirm: number;
	confirm: number;
	dead: number;
	heal: number;
	mediumRiskAreaNum: number;
	continueDayZeroLocalConfirmAdd: number;
	mtime: string;
	showRate: boolean;
	wzz: number;
	provinceLocalConfirm: number;
	highRiskAreaNum: number;
	adcode: string;
}

export interface Today {
	tip: string;
	wzz_add: number;
	local_confirm_add: number;
	abroad_confirm_add: number;
	dead_add: number;
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
}

export interface Total {
	continueDayZeroConfirmAdd: number;
	continueDayZeroConfirm: number;
	mtime: string;
	dead: number;
	heal: number;
	provinceLocalConfirm: number;
	highRiskAreaNum: number;
	adcode: string;
	showRate: boolean;
	confirm: number;
	showHeal: boolean;
	wzz: number;
	mediumRiskAreaNum: number;
	continueDayZeroLocalConfirmAdd: number;
	nowConfirm: number;
}

export interface Today {
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	wzz_add: number;
	local_confirm_add: number;
}

export interface Total {
	dead: number;
	wzz: number;
	provinceLocalConfirm: number;
	mediumRiskAreaNum: number;
	continueDayZeroLocalConfirmAdd: number;
	confirm: number;
	heal: number;
	adcode: string;
	nowConfirm: number;
	showRate: boolean;
	showHeal: boolean;
	highRiskAreaNum: number;
	continueDayZeroLocalConfirm: number;
	mtime: string;
}

export interface Children {
	name: string;
	adcode: string;
	date: string;
	today: Today;
	total: Total;
}

export interface Children {
	adcode: string;
	date: string;
	today: Today;
	total: Total;
	children: Children[];
	name: string;
}

export interface AreaTree {
	today: Today;
	total: Total;
	children: Children[];
	name: string;
}

export interface ChinaTotal {
	importedCase: number;
	showLocalConfirm: number;
	localConfirmH5: number;
	mediumRiskAreaNum: number;
	highRiskAreaNum: number;
	mRiskTime: string;
	suspect: number;
	local_acc_confirm: number;
	localWzzAdd: number;
	confirmAdd: number;
	heal: number;
	nowSevere: number;
	showlocalinfeciton: number;
	nowLocalWzz: number;
	mtime: string;
	nowConfirm: number;
	localConfirm: number;
	confirm: number;
	dead: number;
	noInfect: number;
	noInfectH5: number;
	deadAdd: number;
	localConfirmAdd: number;
}

export interface ChinaAdd {
	dead: number;
	suspect: number;
	nowSevere: number;
	localConfirmH5: number;
	heal: number;
	nowConfirm: number;
	importedCase: number;
	noInfect: number;
	localConfirm: number;
	noInfectH5: number;
	confirm: number;
}

export interface Diseaseh5Shelf {
	isShowAdd: boolean;
	showAddSwitch: ShowAddSwitch;
	areaTree: AreaTree[];
	lastUpdateTime: string;
	chinaTotal: ChinaTotal;
	chinaAdd: ChinaAdd;
}

export interface LocalCityNCOVDataList {
	city: string;
	date: string;
	local_confirm_add: number;
	mediumRiskAreaNum: number;
	highRiskAreaNum: number;
	isSpecialCity: boolean;
	province: string;
	adcode: string;
	isUpdated: boolean;
	mtime: string;
	local_wzz_add: string;
}
// 直接使用这个就行
export interface RootObject {
	diseaseh5Shelf: Diseaseh5Shelf;
	localCityNCOVDataList: LocalCityNCOVDataList[];
}